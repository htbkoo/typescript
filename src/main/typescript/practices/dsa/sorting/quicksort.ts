const DEFAULT_COMPARATOR = (a, b) => a - b;

export type Comparator<T> = (a: T, b: T) => number;

export function quickSort<T>(arr: Array<T>, compareFn: Comparator<T> = DEFAULT_COMPARATOR): Array<T> {
    const arr_copy = arr.slice();
    quickSortImpl({
        arr: arr_copy,
        compareFn,
        left: 0,
        right: arr.length - 1
    });
    return arr_copy;
}

type SortParams<T> = { arr: Array<T>, compareFn: Comparator<T>, left: number, right: number };

function quickSortImpl<T>({arr, compareFn, left, right}: SortParams<T>) {
    const index = partition({arr, compareFn, left, right});
    if (left < index - 1) {
        quickSortImpl({arr, compareFn, left, right: index - 1});
    }
    if (index < right) {
        quickSortImpl({arr, compareFn, left: index, right});
    }
}

function partition<T>({arr, compareFn, left, right}: SortParams<T>): number {
    const pivot = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (compareFn(arr[left], pivot) < 0) {
            left++;
        }
        while (compareFn(arr[right], pivot) > 0) {
            right--;
        }

        if (left <= right) {
            swapLeftAndRight();
            left++;
            right--;
        }

        function swapLeftAndRight() {
            const temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }
    return left;
}