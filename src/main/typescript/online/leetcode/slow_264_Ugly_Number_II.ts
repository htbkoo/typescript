/*
https://leetcode.com/problems/ugly-number-ii/description/

Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example:

Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note:

    1 is typically treated as an ugly number.
    n does not exceed 1690.

* */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n: number): number {
    let heap = MinHeap.newHeap();
    heap.push(1);
    let count = 0, value, added = {1: true};
    while (count < n) {
        value = heap.pop();
        count++;
        [2, 3, 5].forEach(factor => {
            let newValue = value * factor;
            if (!(newValue in added)) {
                heap.push(newValue);
                added[newValue] = true;
            }
        });
    }

    return value;
};

export class MinHeap {
    private readonly _values: number[] = [];

    public static newHeap() {
        return new MinHeap();
    }

    public static heapFrom(arr: number[]) {
        return arr.reduce((heap, v) => {
            heap.push(v);
            return heap;
        }, new MinHeap());
    }

    public push(value: number) {
        this._values.push(value);
        this._pullUp(this._size() - 1);
    }

    public pop(): number {
        const size = this._size();
        if (size === 0) {
            throw new Error("heap is empty");
        } else if (size === 1) {
            return this._values.pop();
        } else {
            const value = this._values[0];
            this._values[0] = this._values.pop();
            this._pushDown(0);
            return value;
        }
    }

    private _size(): number {
        return this._values.length;
    }

    private _pullUp(pos: number) {
        const isRoot = pos === 0;
        if (!isRoot) {
            const parentPos = Math.floor((pos - 1) / 2);
            if (this._isFirstBetter(pos, parentPos)) {
                this._swap(parentPos, pos);
                this._pullUp(parentPos);
            }
        }
    }

    private _isFirstBetter(first: number, second: number) {
        return this._values[first] < this._values[second];
    }

    private _swap(pos: number, other: number) {
        const temp = this._values[pos];
        this._values[pos] = this._values[other];
        this._values[other] = temp;
    }

    private _pushDown(pos: number) {
        const numChild = this._numberOfChildren(pos);
        if (numChild > 0) {
            const betterChild = this._betterChild(pos, numChild);
            if (this._isFirstBetter(betterChild, pos)) {
                this._swap(betterChild, pos);
                this._pushDown(betterChild);
            }
        }
    }

    private _numberOfChildren(pos: number): number {
        return Math.min(2, Math.max(0, this._size() - (2 * pos - 1)))
    }

    private _betterChild(pos: number, numChild: number) {
        const left = 2 * pos + 1;
        switch (numChild) {
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
        throw new Error(`unrecognized numChild: ${numChild}`)
    }
}


export default nthUglyNumber;