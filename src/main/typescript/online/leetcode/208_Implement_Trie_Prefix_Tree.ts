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
};

const CHAR_CODE_A = 'a'.charCodeAt(0);

class TrieNode {
    private readonly _children: TrieNode[] = Array(26);

    private _isEnd: boolean = false;
    private _hasChildren: boolean = false;

    public get isEnd(): boolean {
        return this._isEnd;
    }

    public push(str: string) {
        const length = str.length;
        let current: TrieNode = this;
        for (let i = 0; i < length; ++i) {
            let ch = TrieNode._getCh(str, i);
            current._hasChildren = true;
            if (!current._hasSpecificChildren(ch)) {
                current._children[ch] = new TrieNode();
            }
            current = current._children[ch];
        }
        current._isEnd = true;
    }

    public searchFor(str: string): TrieNode {
        const length = str.length;
        let current: TrieNode = this;

        if (length === 0) {
            return current;
        }

        for (let i = 0; i < length; ++i) {
            let ch = TrieNode._getCh(str, i);
            if (!current._hasSpecificChildren(ch)) {
                return EMPTY_NODE;
            }
            current = current._children[ch];
        }
        return current;
    }

    public hasStartWith(str: string): boolean {
        let node = this.searchFor(str);
        return node.isEnd || node._hasChildren;
    }

    private static _getCh(str: string, pos: number): number {
        return str.charCodeAt(pos) - CHAR_CODE_A;
    }

    private _hasSpecificChildren(ch: number) {
        return (typeof this._children[ch]) !== "undefined";
    }
}

const EMPTY_NODE = new TrieNode();

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word: string): void {
    this._root.push(word);
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word: string): boolean {
    return this._root.searchFor(word).isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix: string): boolean {
    return this._root.hasStartWith(prefix);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export default Trie;