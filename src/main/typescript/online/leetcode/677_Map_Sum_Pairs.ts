/*
https://leetcode.com/problems/map-sum-pairs/description/

Implement a MapSum class with insert, and sum methods.

For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one.

For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value whose key starts with the prefix.

Example 1:

Input: insert("apple", 3), Output: Null
Input: sum("ap"), Output: 3
Input: insert("app", 2), Output: Null
Input: sum("ap"), Output: 5

* */

/**
 * Initialize your data structure here.
 */
var MapSum = function () {
    this._root = new TrieNode();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    this._root.push(key, val);
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let vals = this._root.search(prefix)._vals;
    return Object.keys(vals).reduce((sum, key) => sum + vals[key], 0);
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

class TrieNode {
    private readonly _children: { [k: string]: TrieNode } = {};
    _vals: { [k: string]: number } = {};

    public push(key: string, val: number) {
        const length = key.length;
        let current: TrieNode = this;
        for (let i = 0; i < length; ++i) {
            current._vals[key] = val;
            const ch = getCh(key, i);
            if (!current.hasChild(ch)) {
                current._children[ch] = new TrieNode();
            }
            current = current._children[ch];
        }

        current._vals[key] = val;
    }

    public hasChild(ch: string): boolean {
        return ch in this._children;
    }

    public search(prefix: string): TrieNode {
        const length = prefix.length;
        let current: TrieNode = this;

        for (let i = 0; i < length; ++i) {
            const ch = getCh(prefix, i);
            if (!current.hasChild(ch)) {
                return EMPTY_NODE;
            }
            current = current._children[ch];
        }

        return current;
    }
}

const EMPTY_NODE = new TrieNode();

function getCh(str: string, i: number) {
    return str.charAt(i);
}

export default MapSum;