/*
https://leetcode.com/problems/implement-trie-prefix-tree/description/

Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true

Note:

    You may assume that all inputs are consist of lowercase letters a-z.
    All inputs are guaranteed to be non-empty strings.

* */
/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this._root = new TrieNode();
    this._dictionary = {};
};

class TrieNode {
    private readonly _children: { [ch: string]: TrieNode } = {};

    public push(str: string[]) {
        if (str.length > 0) {
            let firstCh = TrieNode._getFirstCh(str);
            if (!(firstCh in this._children)) {
                this._children[firstCh] = new TrieNode();
            }
            this._children[firstCh].push(str.splice(1));
        }
    }

    public hasStartWith(str: string[]): boolean {
        let firstCh = TrieNode._getFirstCh(str);
        if (str.length > 1) {
            if (firstCh in this._children) {
                return this._children[firstCh].hasStartWith(str.splice(1));
            } else {
                return false;
            }
        } else {
            return (firstCh in this._children);
        }
    }

    private static _getFirstCh(str: string[]) {
        return str[0];
    }


}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    this._root.push(word.split(""));
    this._dictionary[word] = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    return !!this._dictionary[word];
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return this._root.hasStartWith(prefix.split(""));
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export default Trie;