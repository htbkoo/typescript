/*
https://leetcode.com/contest/leetcode-weekly-contest-56/problems/find-k-th-smallest-pair-distance/

719. Find K-th Smallest Pair Distance

Given an integer array, return the k-th smallest distance among all the pairs. The distance of a pair (A, B) is defined as the absolute difference between A and B.

Example 1:

Input:
nums = [1,3,1]
k = 1
Output: 0
Explanation:
Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.

Note:

    2 <= len(nums) <= 10000.
    0 <= nums[i] < 1000000.
    1 <= k <= len(nums) * (len(nums) - 1) / 2.

* */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums: number[], k: number): number {
    const length = nums.length;

    const heap = MaxKthHeap.newKthHeap(k);

    for (let i = 0; i < length; ++i) {
        for (let j = i + 1; j < length; ++j) {
            heap.push(Math.abs(nums[i] - nums[j]));
        }
    }
    return heap.pop();
};

export class MaxKthHeap {
    private _k: number;
    private _values: number[] = [];

    constructor(k: number) {
        this._k = k;
    }

    public static newKthHeap(k: number) {
        return new MaxKthHeap(k);
    }

    public push(v: number) {
        if (this._size() < this._k) {
            this._values.push(v);
            this._pullUp(this._size() - 1);
        } else {
            let top = this._peek();
            if (this._isFirstBetter(top, v)) {
                this.pop();
                this.push(v);
            }
        }

    }

    public pop(): number {
        const size = this._size();
        if (size === 0) {
            throw new Error("heap is empty");
        } else if (size === 1) {
            return this._values.pop()
        } else {
            const max = this._values[0];
            this._values[0] = this._values.pop();
            this._pushDown(0);
            return max;
        }
    }

    private _size() {
        return this._values.length;
    }

    private _pullUp(pos: number) {
        const isRoot = pos === 0;
        if (!isRoot) {
            const parentPos = Math.floor((pos - 1) / 2);
            if (this._isFirstPosBetter(pos, parentPos)) {
                this._swap(pos, parentPos);
                this._pullUp(parentPos);
            }
        }
    }

    private _isFirstPosBetter(pos: number, other: number) {
        return this._isFirstBetter(this._values[pos], this._values[other]);
    }

    private _isFirstBetter(first, second) {
        return first > second;
    }

    private _swap(pos: number, other: number) {
        const temp = this._values[pos];
        this._values[pos] = this._values[other];
        this._values[other] = temp;
    }

    private _peek() {
        return this._values[0];
    }

    private _pushDown(pos: number) {
        const numChild = this._getNumChild(pos);
        if (numChild > 0) {
            const bestChild = this._getBestChild(pos, numChild);
            if (this._isFirstPosBetter(bestChild, pos)) {
                this._swap(bestChild, pos);
                this._pushDown(bestChild);
            }
        }
    }

    private _getNumChild(pos: number) {
        return Math.max(0, Math.min(2, this._size() - (2 * pos + 1)))
    }

    private _getBestChild(pos: number, numChild: number) {
        const left = 2 * pos + 1;
        switch (numChild) {
            case 1:
                return left;
            case 2:
                const right = 2 * pos + 2;
                if (this._isFirstPosBetter(right, left)) {
                    return right;
                } else {
                    return left;
                }
        }
    }
}

export default smallestDistancePair;