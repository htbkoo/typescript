const DEFAULT_COMPARATOR = (a, b) => a - b;

export type Comparator<T> = (a: T, b: T) => number;

export function quickSort<T>(arr: Array<T>, compareFn: Comparator<T> = DEFAULT_COMPARATOR): Array<T> {
    return arr;
}