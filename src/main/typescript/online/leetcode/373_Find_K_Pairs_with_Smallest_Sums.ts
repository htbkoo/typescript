/*
https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/

 You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u,v) which consists of one element from the first array and one element from the second array.

Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

Example 1:

Given nums1 = [1,7,11], nums2 = [2,4,6],  k = 3

Return: [1,2],[1,4],[1,6]

The first 3 pairs are returned from the sequence:
[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

Example 2:

Given nums1 = [1,1,2], nums2 = [1,2,3],  k = 2

Return: [1,1],[1,1]

The first 2 pairs are returned from the sequence:
[1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

Example 3:

Given nums1 = [1,2], nums2 = [3],  k = 3

Return: [1,3],[2,3]

All possible pairs are returned from the sequence:
[1,3],[2,3]

Credits:
Special thanks to @elmirap and @StefanPochmann for adding this problem and creating all test cases.

* */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1: number[], nums2: number[], k: number): number[][] {
    const answer = [];

    const heap: KSmallestPairsHeap = new KSmallestPairsHeap();
    const added = nums1.map(() => nums2.map(() => false));

    addIfValid(0, 0);
    while (!heap.isEmpty() && k > 0) {
        let pairWithSum = heap.pop();
        addIfValid(pairWithSum.u.index + 1, pairWithSum.v.index);
        addIfValid(pairWithSum.u.index, pairWithSum.v.index + 1);

        answer.push(pairWithSum.asPair());
        --k;
    }
    return answer;

    function addIfValid(i, j) {
        const isInRange = nums1.length > i && nums2.length > j && i >= 0 && j >= 0;
        if (isInRange && !added[i][j]) {
            heap.push(pair(point(i, nums1[i]), point(j, nums2[j])));
            added[i][j] = true;
        }
    }

    function point(index, value): Point {
        return new Point(index, value);
    }

    function pair(u: Point, v: Point): PairWithSum {
        return new PairWithSum(u, v);
    }
};

export class KSmallestPairsHeap {
    private readonly _pairs: PairWithSum[] = [];

    public push(pair: PairWithSum): KSmallestPairsHeap {
        this._pairs.push(pair);
        this._pullUp(this._size() - 1);
        return this;
    }

    public pop(): PairWithSum {
        const size = this._size();
        if (size === 0) {
            throw new Error("heap is empty");
        } else if (size === 1) {
            return this._pairs.pop();
        } else {
            const pair = this._pairs[0];
            this._pairs[0] = this._pairs.pop();
            this._pushDown(0);
            return pair;
        }
    }

    public isEmpty(): boolean {
        return this._size() === 0;
    }

    private _size(): number {
        return this._pairs.length;
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
        const first = this._pairs[pos], second = this._pairs[otherPos];
        return first.sum < second.sum;
    }

    private _swap(pos: number, otherPos: number) {
        const temp = this._pairs[pos];
        this._pairs[pos] = this._pairs[otherPos];
        this._pairs[otherPos] = temp;
    }

    private _pushDown(pos: number) {
        const numChildren = this._getNumChildren(pos);
        if (numChildren > 0) {
            const bestChildPos = this._getBestChild(pos, numChildren);
            if (this._isFirstBetter(bestChildPos, pos)) {
                this._swap(bestChildPos, pos);
                this._pushDown(bestChildPos);
            }
        }
    }

    private _getNumChildren(pos: number) {
        return Math.min(2, Math.max(0, this._size() - (2 * pos + 1)));
    }

    private _getBestChild(pos: number, numChildren: number) {
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
        throw new Error(`unrecognized numChildren: ${numChildren}`)
    }
}

type Pair = [number, number];

class Point {
    public readonly index: number;
    public readonly value: number;

    constructor(index: number, value: number) {
        this.index = index;
        this.value = value;
    }
}

class PairWithSum {
    public readonly u: Point;
    public readonly v: Point;
    public readonly sum: number;

    constructor(u: Point, v: Point) {
        this.u = u;
        this.v = v;
        this.sum = u.value + v.value;
    }

    public asPair(): Pair {
        return [this.u.value, this.v.value];
    }
}

export default kSmallestPairs;