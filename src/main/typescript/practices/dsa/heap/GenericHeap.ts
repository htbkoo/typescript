type Comparator<Type> = (a: Type, b: Type) => number;
const defaultComparator = (a, b) => a - b;

export default class GenericHeap<T> {
    private readonly _elements: T[];
    private _comparator: Comparator<T>;

    constructor(comparator: Comparator<T>) {
        this._elements = [];
        this._comparator = comparator;
    }

    public static buildHeap<X>(arr: X[], comparator: Comparator<X> = defaultComparator): GenericHeap<X> {
        return arr.reduce((heap, x) => {
            heap.push(x);
            return heap;
        }, new GenericHeap<X>(comparator));
    }

    public push(obj: T) {
        this._elements.push(obj);
        this._pullUp(this.size() - 1);
    }

    public pop(): T {
        const isEmpty = this.size() === 0;
        if (isEmpty) {
            throw new Error("heap is empty");
        } else if (this.size() === 1) {
            return this._elements.pop();
        } else {
            let value = this._elements[0];
            this._elements[0] = this._elements.pop();
            this._pushDown(0);
            return value;
        }
    }

    public size() {
        return this._elements.length;
    }

    private _pullUp(pos: number) {
        if (!this._isRoot(pos)) {
            let parentPos = this._parentPos(pos);
            if (this._isFirstBetter(pos, parentPos)) {
                this._swap(pos, parentPos);
                this._pullUp(parentPos);
            }
        }
    }

    private _parentPos(pos: number): number {
        return Math.floor((pos - 1) / 2);
    }

    private _isRoot(pos: number) {
        return pos === 0;
    }

    private _isFirstBetter(pos: number, otherPos: number) {
        return this._comparator(this._elements[pos], this._elements[otherPos]) < 0;
    }

    private _swap(pos: number, otherPos: number) {
        const temp: T = this._elements[pos];
        this._elements[pos] = this._elements[otherPos];
        this._elements[otherPos] = temp;
    }

    private _pushDown(pos: number) {
        if (this._hasChild(pos)) {
            let betterChildPos = this._getBetterChildPos(pos);
            if (this._isFirstBetter(betterChildPos, pos)) {
                this._swap(pos, betterChildPos);
                this._pushDown(betterChildPos);
            }
        }
    }
    private _hasChild(pos: number) {
        return this.size() > this._left(pos);
    }

    private _hasChildren(pos: number) {
        return this.size() > this._right(pos);
    }

    private _left(pos: number) {
        return 2 * pos + 1;
    }

    private _right(pos: number) {
        return 2 * pos + 2;
    }

    private _getBetterChildPos(pos: number) {
        if (this._hasChild(pos)) {
            let left = this._left(pos), right = this._right(pos);
            if (this._hasChildren(pos) && this._isFirstBetter(right, left)) {
                return right;
            } else {
                return left;
            }
        }
    }
}