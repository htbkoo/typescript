import SortingEngine, {DEFAULT_COMPARATOR} from "./SortingEngine";

export class MergeSort implements SortingEngine {
    sort<T>(arr: Array<T>, compareFn: (a: T, b: T) => number = DEFAULT_COMPARATOR): Array<T> {
        const arr_copy = arr.slice();
        this.mergeSort({arr: arr_copy, compareFn, left: 0, right: arr.length - 1});
        return arr_copy;
    }

    private mergeSort<T>({arr, compareFn, left, right}: { arr: T[]; left: number; compareFn: (a: T, b: T) => number; right: number }): void {
        if (right > left) {
            const mid = Math.floor((left + right) / 2);
            this.mergeSort({arr, compareFn, left, right: mid});
            this.mergeSort({arr, compareFn, left: mid + 1, right});
            this.merge({arr, compareFn, left, mid, right});
        }
    }

    private merge<T>({arr, compareFn, mid, left, right}: { arr: T[]; compareFn: (a: T, b: T) => number; left: number; mid: number; right: number }) {
        const leftLast = mid - left, helperLast = right - left;
        let current = left, helperLeft = 0, helperRight = leftLast + 1;
        const helper = arr.slice(left, right + 1);
        while ((helperLeft <= leftLast) && (helperRight <= helperLast)) {
            const elementLeft = helper[helperLeft], elementRight = helper[helperRight];
            if (compareFn(elementLeft, elementRight) <= 0) {
                arr[current] = elementLeft;
                helperLeft++;
            } else {
                arr[current] = elementRight;
                helperRight++;
            }
            current++;
        }

        while (helperLeft <= leftLast) {
            arr[current] = helper[helperLeft];
            helperLeft++;
            current++;
        }
    }
}
