/*

Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.

Note:
You may assume k is always valid, 1 ≦ k ≦ n2.

* */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix: number[][], k: number): number {
    let heap = Heap.fromMatrix(matrix);
    while (k > 1) {
        heap.pop();
        k--;
    }
    return heap.pop();
};

export class Heap {
    private _nums: number[] = [];

    public static fromMatrix(matrix: number[][]): Heap {
        return matrix.reduce((heap, row) =>
            row.reduce((h, num) => {
                h.push(num);
                return h;
            }, heap), new Heap());
    }

    public pop(): number {
        let size = this.size();
        if (size === 0) {
            throw new Error("heap is empty");
        } else if (size === 1) {
            return this._nums.pop();
        } else {
            const num = this._nums[0];
            this._nums[0] = this._nums.pop();
            this._pushDown(0);
            return num;
        }
    }

    // Used in the factory method 378_Kth_Smallest_Element_in_a_Sorted_Matrix.ts:43 but IntelliJ failed to detect this
    // noinspection JSUnusedLocalSymbols
    private push(num: any): any {
        this._nums.push(num);
        this._pullUp(this.size() - 1);
    }

    private size() {
        return this._nums.length;
    }

    private _pullUp(pos: number) {
        const isRoot = pos === 0;
        if (!isRoot) {
            const parentPos = Math.floor((pos - 1) / 2);
            if (this._isFirstBetter(pos, parentPos)) {
                this._swap(pos, parentPos);
                this._pullUp(parentPos);
            }
        }
    }

    private _isFirstBetter(pos: number, otherPos: number): boolean {
        return this._nums[pos] < this._nums[otherPos];
    }

    private _swap(pos: number, otherPos: number) {
        const temp = this._nums[pos];
        this._nums[pos] = this._nums[otherPos];
        this._nums[otherPos] = temp;
    }

    private _pushDown(pos: number) {
        const numChildren = this._numOfChildren(pos);
        if (numChildren > 0) {
            const childPos = this._getBetterChildPos(pos, numChildren);
            if (this._isFirstBetter(childPos, pos)) {
                this._swap(childPos, pos);
                this._pushDown(childPos);
            }
        }
    }

    private _numOfChildren(pos: number) {
        return Math.min(2, Math.max(0, this.size() - (2 * pos + 1)));
    }

    private _getBetterChildPos(pos: number, numChildren: number) {
        const left = 2 * pos + 1;
        switch (numChildren) {
            case 1:
                return left;
            case 2:
                const right = 2 * pos + 2;
                if (this._isFirstBetter(right, left)) {
                    return right;
                } else {
                    return left;
                }
        }
        throw new Error(`numChildren: ${numChildren}, unrecognized`)
    }
}

export default kthSmallest;