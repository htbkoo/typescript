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

class TrieNode {
    private _isEnd: boolean = false;
    private readonly _children: { [ch: string]: TrieNode } = {};

    public get isEnd(): boolean {
        return this._isEnd;
    }

    public push(str: string) {
        this._push(str.split(""));
    }

    public searchFor(str: string): TrieNode {
        return this._searchFor(str.split(""));
    }

    public hasStartWith(str: string): boolean {
        let node = this.searchFor(str);
        let nodeHasChildren = Object.keys(node._children).length > 0;
        return node.isEnd || nodeHasChildren;
    }

    private _push(str: string[]) {
        if (str.length > 0) {
            let firstCh = TrieNode._getFirstCh(str);
            if (!(firstCh in this._children)) {
                this._children[firstCh] = new TrieNode();
            }
            this._children[firstCh]._push(str.splice(1));
        } else {
            this._isEnd = true;
        }
    }

    private _searchFor(str: string[]): TrieNode {
        if (str.length === 0) {
            return this;
        } else {
            let firstCh = TrieNode._getFirstCh(str);

            if (firstCh in this._children) {
                if (str.length > 1) {
                    return this._children[firstCh]._searchFor(str.splice(1));
                } else {
                    return this._children[firstCh];
                }
            } else {
                return EMPTY_NODE;
            }
        }
    }

    private static _getFirstCh(str: string[]) {
        return str[0];
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