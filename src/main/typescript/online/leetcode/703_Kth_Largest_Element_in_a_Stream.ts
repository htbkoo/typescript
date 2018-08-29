/*
https://leetcode.com/problems/kth-largest-element-in-a-stream/description/

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8

Note:
You may assume that nums' length ≥ k-1 and k ≥ 1.

* */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k: number, nums: number[]) {
    this._k = k;
    this._heap = KthLargestHeap.newHeap();
    nums.forEach(num => this.add(num));
    return this;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val: number): number {
    let k = this._k;
    let heap = this._heap;
    if (heap.size() < k) {
        heap.push(val);
    } else {
        const min = heap.peep();
        if (val > min) {
            heap.pop();
            heap.push(val);
        }
    }

    return heap.peep();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */

export default KthLargest;

export class KthLargestHeap {
    private readonly _nums: number[];

    private constructor(nums: number[] = []) {
        this._nums = nums.slice();
    }

    public static newHeap(): KthLargestHeap {
        return new KthLargestHeap();
    }

    public push(num: number): KthLargestHeap {
        this._nums.push(num);
        this._pullUp(this.size() - 1);
        return this;
    }

    public pop(): number {
        const size = this.size();
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

    public size() {
        return this._nums.length;
    }

    public peep() {
        return this._nums[0];
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

    private _isFirstBetter(pos: number, otherPos: number) {
        return this._nums[pos] < this._nums[otherPos];
    }

    private _swap(pos: number, otherPos: number) {
        const temp = this._nums[pos];
        this._nums[pos] = this._nums[otherPos];
        this._nums[otherPos] = temp;
    }

    private _pushDown(pos: number) {
        const numChildren = this._getNumChildren(pos);
        if (numChildren > 0) {
            const bestChildPos = this._getBestChildPos(pos, numChildren);
            if (this._isFirstBetter(bestChildPos, pos)) {
                this._swap(bestChildPos, pos);
                this._pushDown(bestChildPos);
            }
        }
    }

    private _getNumChildren(pos: number) {
        return Math.min(2, Math.max(0, this.size() - (2 * pos + 1)));
    }

    private _getBestChildPos(pos: number, numChildren: number) {
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
        throw new Error(`unrecognized ${numChildren}`);
    }
}
