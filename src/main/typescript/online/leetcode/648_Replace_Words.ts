/*
https://leetcode.com/problems/replace-words/description/

In English, we have a concept called root, which can be followed by some other words to form another longer word - let's call this word successor. For example, the root an, followed by other, which can form another word another.

Now, given a dictionary consisting of many roots and a sentence. You need to replace all the successor in the sentence with the root forming it. If a successor has many roots can form it, replace it with the root with the shortest length.

You need to output the sentence after the replacement.

Example 1:

Input: dict = ["cat", "bat", "rat"]
sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"

Note:

    The input will only have lower-case letters.
    1 <= dict words number <= 1000
    1 <= sentence words number <= 1000
    1 <= root length <= 100
    1 <= sentence words length <= 1000

* */

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dict: string[], sentence: string): string {
    let trie = dict.reduce((root, word) => root.push(word), new TrieNode());

    const SEPARATOR = " ";

    return sentence.split(SEPARATOR)
        .map(byReplacingFrom)
        .join(SEPARATOR);

    function byReplacingFrom(word) {
        let possibleFirstMatch: TrieNode = trie.findFirstMatch(word);
        if (possibleFirstMatch.isEnd) {
            return possibleFirstMatch.isEnd;
        } else {
            return word;
        }
    }
};

class TrieNode {
    private _children: { [k: string]: TrieNode } = {};
    private _isEnd: string;

    public push(word: string): TrieNode {
        const length = word.length;
        let current: TrieNode = this;
        for (let i = 0; i < length; ++i) {
            let ch = getCh(word, i);
            if (!this._hasChild(ch)) {
                current._children[ch] = new TrieNode();
            }
            current = current._children[ch];
        }
        current._isEnd = word;

        return this;
    }

    public get isEnd(): string {
        return this._isEnd;
    }

    public findFirstMatch(word: string) {
        const length = word.length;
        let current: TrieNode = this;
        for (let i = 0; i < length; ++i) {
            let ch = getCh(word, i);
            if (!current._hasChild(ch)) {
                return EMPTY_NODE;
            }
            current = current._children[ch];
            if (current.isEnd) {
                return current;
            }
        }
        return current;
    }

    private _hasChild(ch: string): boolean {
        return ch in this._children;
    }
}

const EMPTY_NODE: TrieNode = new TrieNode();

function getCh(word, pos) {
    return word.charAt(pos);
}

export default replaceWords;