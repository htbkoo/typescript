/*

Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

Note:

    You may assume k is always valid, 1 ≦ k ≦ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

* */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums: number[], k: number): number[] {
    const frequencies = nums.reduce((obj, num) => {
        if (num in obj) {
            obj[num]++;
        } else {
            obj[num] = 1;
        }
        return obj;
    }, {});

    const heap = FrequencyHeap.fromObj(frequencies);
    const topK: number[] = [];
    for (let i = 0; i < k; ++i) {
        topK.push(parseFloat(heap.pop().num));
    }

    return topK;
};

type Entry = {
    num: string,
    frequency: number
}

export class FrequencyHeap {
    private readonly _frequencies: Entry[];

    constructor(frequencies: Entry[]) {
        this._frequencies = [];
        frequencies.forEach(freq => {
            this._frequencies.push(freq);
            this._pullUp(this.size() - 1);
        })
    }

    public static fromObj(obj): FrequencyHeap {
        const entries: Entry[] = Object.keys(obj).map(k => ({num: k, frequency: obj[k]}));
        return new FrequencyHeap(entries);
    }

    public pop(): Entry {
        if (this.size() === 0) {
            throw new Error("Heap is empty");
        } else if (this.size() === 1) {
            return this._frequencies.pop();
        } else {
            const firstObj = this._frequencies[0];
            this._frequencies[0] = this._frequencies.pop();
            this._pushDown(0);
            return firstObj;
        }
    }

    private size() {
        return this._frequencies.length;
    }

    private _pullUp(pos: number) {
        let isRoot = pos === 0;
        if (!isRoot) {
            let parentPos = Math.floor((pos - 1) / 2);
            if (this._isFirstBetter(pos, parentPos)) {
                this._swap(pos, parentPos);
                this._pullUp(parentPos);
            }
        }
    }

    private _pushDown(pos: number) {
        const numChildren = this._numOfDirectChildren(pos);
        if (numChildren > 0) {
            let childPos = this._betterChildPos(pos, numChildren);
            if (this._isFirstBetter(childPos, pos)) {
                this._swap(pos, childPos);
                this._pushDown(childPos);
            }
        }
    }

    private _isFirstBetter(first: number, second: number) {
        return this._frequencies[first].frequency > this._frequencies[second].frequency;
    }

    private _swap(first: number, second: number) {
        const temp: Entry = this._frequencies[first];
        this._frequencies[first] = this._frequencies[second];
        this._frequencies[second] = temp;
    }

    private _numOfDirectChildren(pos: number) {
        return Math.min(2, Math.max(0, this.size() - (2 * pos + 1)));
    }

    private _betterChildPos(pos: number, numChildren: number): number {
        let left = (2 * pos + 1);
        switch (numChildren) {
            case 2:
                let right = (2 * pos + 2);
                return this._isFirstBetter(right, left) ? right : left;
            case 1:
                return left;
        }
        throw new Error(`number of direct children = ${numChildren} which is not recognized`);
    }
}

export default topKFrequent;