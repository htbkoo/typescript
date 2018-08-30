/*
https://leetcode.com/problems/add-and-search-word-data-structure-design/description/

Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)

search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true

Note:
You may assume that all words are consist of lowercase letters a-z.

* */

class TrieNode {
    readonly _children: { [k: string]: TrieNode } = {};
    isEnd: boolean = false;

    public hasChild(ch) {
        return ch in this._children;
    }
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
    this._root = new TrieNode();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word: string): void {
    const length = word.length;
    let current: TrieNode = this._root;

    for (let i = 0; i < length; ++i) {
        let ch = getCh(word, i);
        if (!current.hasChild(ch)) {
            current._children[ch] = new TrieNode();
        }
        current = current._children[ch];
    }
    current.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word: string): boolean {
    let candidates: TrieNode[] = [this._root], nextCharCandidates: TrieNode[] = [];
    const length = word.length;

    for (let i = 0; i < length; ++i) {
        while (candidates.length > 0) {
            const node = candidates.pop();
            const ch = getCh(word, i);
            if ("." === ch) {
                Object.keys(node._children).forEach(key => nextCharCandidates.push(node._children[key]));
            } else {
                if (node.hasChild(ch)) {
                    nextCharCandidates.push(node._children[ch])
                }
            }
        }

        if (nextCharCandidates.length === 0) {
            return false;
        }

        candidates = nextCharCandidates;
        nextCharCandidates = [];
    }

    return candidates.some(candidate => candidate.isEnd);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

function getCh(word: string, pos: number) {
    return word.charAt(pos);
}

export default WordDictionary;