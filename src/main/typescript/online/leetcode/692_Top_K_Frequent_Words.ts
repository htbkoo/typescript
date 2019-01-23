/*
https://leetcode.com/problems/top-k-frequent-words/

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:

Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:

Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.

Note:

    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Input words contain only lowercase letters.

Follow up:

    Try to solve it in O(n log k) time and O(n) extra space.

* */

type FrequencyMap = {
    [word: string]: number;
};

type Entry = {
    word: string,
    frequency: number
};

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words: string[], k: number): string[] {
    const frequencies: FrequencyMap = words.reduce(countFrequency, {});

    const entries = Object.keys(frequencies).map(toEntry);

    const heap = TopKFrequentHeap.newHeap(entries, k);

    return [...Array(k)].map(() => heap.pop().word);

    function countFrequency(map: FrequencyMap, word: string): FrequencyMap {
        map[word] = map[word] ? map[word] + 1 : 0;
        return map;
    }

    function toEntry(word: string): Entry {
        return {
            word,
            frequency: frequencies[word]
        };
    }
};

class TopKFrequentHeap {
    // Min-Heap with at most K element

    private readonly elements: Entry[] = [];
    private readonly k: number;

    private constructor(k: number) {
        this.k = k;
    }

    public static newHeap(initElements: Entry[], k: number): TopKFrequentHeap {
        const newHeap = new TopKFrequentHeap(k);
        return initElements.reduce((heap: TopKFrequentHeap, entry: Entry): TopKFrequentHeap => heap.push(entry), newHeap);
    }

    public push(entry: Entry): TopKFrequentHeap {
        if (this.isFull()) {
            if (this.shouldReplace(entry)) {
                this.pop();
                this.addElement(entry);
            }
        } else {
            this.addElement(entry);
        }
        return this;
    }

    public pop(): Entry {
        const size = this.elements.length;
        if (size === 0) {
            throw new Error("heap is empty");
        } else if (size === 1) {
            return this.elements.pop();
        } else {
            const entry = this.elements[0];
            this.elements[0] = this.elements.pop();
            this.pushDown(0);
            return entry;
        }
    }

    private isFull() {
        return this.elements.length >= this.k;
    }

    private pullUp(pos: number) {
        if (!isRoot()) {
            const parentPos = Math.floor((pos - 1) / 2);
            if (this.isFirstPosBetter(pos, parentPos)) {
                this.swap(pos, parentPos);
                this.pullUp(parentPos);
            }
        }

        function isRoot() {
            return pos === 0;
        }
    }

    private addElement(entry: Entry) {
        this.elements.push(entry);
        this.pullUp(this.elements.length - 1);
    }

    private shouldReplace(entry: Entry) {
        return this.isFirstBetter(this.elements[0], entry);
    }

    private isFirstPosBetter(firstPos: number, secondPos: number): boolean {
        return this.isFirstBetter(this.elements[firstPos], this.elements[secondPos]);
    }

    private isFirstBetter(first: Entry, second: Entry): boolean {
        if (first.frequency < second.frequency) {
            return true;
        } else if (first.frequency === second.frequency) {
            return first.word.localeCompare(second.word) < 0;
        } else {
            return false;
        }
    }

    private swap(pos1: number, pos2: number) {
        const temp = this.elements[pos1];
        this.elements[pos1] = this.elements[pos2];
        this.elements[pos2] = temp;
    }

    private pushDown(pos: number) {
        const numChild = this.countNumChildren(pos);
        if (numChild > 0) {
            const betterChild = this.getBetterChild(pos, numChild);
            if (this.isFirstPosBetter(betterChild, pos)) {
                this.swap(betterChild, pos);
                this.pushDown(betterChild);
            }
        }
    }

    private countNumChildren(pos: number) {
        const size = this.elements.length;
        if (size - 1 >= 2 * pos + 2) {
            return 2;
        } else if (size - 1 >= 2 * pos + 1) {
            return 1;
        } else {
            return 0;
        }
    }

    private getBetterChild(pos: number, numChild: number) {
        const left = 2 * pos + 1;
        switch (numChild) {
            case 1:
                return left;
            case 2: {
                const right = 2 * pos + 2;
                if (this.isFirstPosBetter(right, left)) {
                    return right;
                } else {
                    return left;
                }
            }
        }

        throw new Error(`Unknown numChild: ${numChild} when getting better child for pos: ${pos}`);
    }
}

export default topKFrequent;