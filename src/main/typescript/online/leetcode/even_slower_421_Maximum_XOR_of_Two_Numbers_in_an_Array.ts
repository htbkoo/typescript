/*
https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/description/

Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

Could you do this in O(n) runtime?

Example:

Input: [3, 10, 5, 25, 2, 8]

Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.

* */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums: number[]): number {
    if (!nums || nums.length < 2) {
        return 0;
    } else {
        const trie = nums.map(toBinary)
            .map(toDigitsArray)
            .reduce((trie, digits) => trie.add(digits), TrieNode.trie());

        return trie.getMax(Math.pow(2, 31));
    }
};

class TrieNode {
    private readonly children: TrieNode[] = [];
    // private readonly children: TrieNode[] = [undefined, undefined];
    private isLeaf: boolean = false;

    private constructor() {

    }

    public static trie(): TrieNode {
        return new TrieNode();
    }

    public add(digits: number[]): TrieNode {
        const leaf = digits.reduce((node, digit) => {
            if (!node.children[digit]) {
                node.children[digit] = new TrieNode();
            }
            return node.children[digit];
        }, this);
        leaf.isLeaf = true;

        return this;
    }

    public getMax(base: number): number {
        let zero = this.getZero(), one = this.getOne();

        if (!zero && !one) {
            return 0;
        } else if (zero && one) {
            return base + this.getPairMaxDiff(base / 2, zero, one);
        } else if (zero) {
            return zero.getMax(base / 2);
        } else {
            return one.getMax(base / 2);
        }
    }

    private getPairMaxDiff(base: number, nodeA: TrieNode, nodeB: TrieNode): number {
        const aZero = nodeA.getZero(), aOne = nodeA.getOne(),
            bZero = nodeB.getZero(), bOne = nodeB.getOne();
        const hasPairZeroOne = aZero && bOne, hasPairOneZero = aOne && bZero;
        const hasBothZero = aZero && bZero, hasBothOne = aOne && bOne;

        if (hasPairZeroOne && hasPairOneZero) {
            const nextBase = base / 2;
            return base + Math.max(this.getPairMaxDiff(nextBase, aZero, bOne), this.getPairMaxDiff(nextBase, aOne, bZero),);
        } else if (hasPairZeroOne) {
            return base + this.getPairMaxDiff(base / 2, aZero, bOne);
        } else if (hasPairOneZero) {
            return base + this.getPairMaxDiff(base / 2, aOne, bZero);
        } else if (hasBothZero) {
            return this.getPairMaxDiff(base / 2, aZero, bZero);
        } else if (hasBothOne) {
            return this.getPairMaxDiff(base / 2, aOne, bOne);
        } else {
            return 0;
        }
    }

    private getZero() {
        return this.children[0];
    }

    private getOne() {
        return this.children[1];
    }
}

function toBinary(num: number): string {
    return num.toString(2).padStart(32, "0");
}

function toDigitsArray(binary: string): number[] {
    return binary.split("").map(digit => parseInt(digit));
}

// polyfill String.prototype.padStart
// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
        padString = String(typeof padString !== 'undefined' ? padString : ' ');
        if (this.length >= targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}

export default findMaximumXOR;