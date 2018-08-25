export default class Heap {
    private readonly _pq: number[];

    constructor() {
        this._pq = [];
    }

    public static buildHeap(arr: number[]): Heap {
        return arr.reduce((heap, v) => {
            heap.push(v);
            return heap;
        }, new Heap());
    }

    public push(v: number) {
        this._pq.push(v);
        this._heapifyUp(this._pq.length - 1);
    }

    public pop(): number {
        if (this._hasOneElement()){
            return this._pq.pop();
        }
        if (!this._isEmpty()){
            let value = this._pq[0];
            this._pq[0] = this._pq.pop();
            this._heapifyDown(0);
            return value;
        }else{
            throw new Error("Heap is empty!");
        }
    }

    private _isEmpty() {
        return this._pq.length === 0;
    }

    private _hasOneElement() {
        return this._pq.length === 1;
    }

    private _heapifyUp(pos: number) {
        if (!this._isRoot(pos)) {
            let parentPos = this._getParentPos(pos);
            if (this._isSecondBetter(parentPos, pos)) {
                this._swap(parentPos, pos);
                this._heapifyUp(parentPos);
            }
        }
    }

    private _heapifyDown(pos: number) {
        if (this._hasChild(pos)) {
            let betterChildPos = this._getBetterChildPos(pos);
            if (this._isSecondBetter(pos, betterChildPos)) {
                this._swap(pos, betterChildPos);
                this._heapifyDown(betterChildPos);
            }
        }
    }

    private _getParentPos(pos: number) {
        return Math.floor((pos - 1) / 2);
    }

    private _isRoot(pos: number) {
        return pos === 0;
    }

    private _swap(pos: number, targetPos: number) {
        const temp = this._pq[pos];
        this._pq[pos] = this._pq[targetPos];
        this._pq[targetPos] = temp;
    }

    private _hasChild(pos: number) {
        return this._pq.length > this._getLeftChildPos(pos);
    }

    private _getLeftChildPos(pos: number) {
        return 2 * pos + 1;
    }

    private _getRightChildPos(pos: number) {
        return 2 * pos + 2;
    }

    private _getBetterChildPos(pos: number) {
        if (!this._hasChild(pos)) {
            throw new Error(`pos ${pos} does not have child`);
        }
        let leftChildPos = this._getLeftChildPos(pos);
        let rightChildPos = this._getRightChildPos(pos);
        if (this._pq.length > rightChildPos && this._isSecondBetter(leftChildPos, rightChildPos)) {
            return rightChildPos;
        } else {
            return leftChildPos;
        }
    }

    private _isSecondBetter(pos: number, targetPos: number) {
        return this._pq[pos] > this._pq[targetPos];
    }
}