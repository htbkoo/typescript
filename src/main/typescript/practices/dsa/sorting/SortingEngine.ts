export type Comparator<T> = (a: T, b: T) => number;

export const DEFAULT_COMPARATOR = (a, b) => a - b;

export default interface SortingEngine {
    sort<T>(arr: Array<T>, compareFn?: Comparator<T>): Array<T>
}