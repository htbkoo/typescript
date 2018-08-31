/*
https://leetcode.com/problems/prefix-and-suffix-search/description/

Given many words, words[i] has weight i.

Design a class WordFilter that supports one function, WordFilter.f(String prefix, String suffix). It will return the word with given prefix and suffix with maximum weight. If no word exists, return -1.

Examples:

Input:
WordFilter(["apple"])
WordFilter.f("a", "e") // returns 0
WordFilter.f("b", "") // returns -1

Note:

    words has length in range [1, 15000].
    For each test case, up to words.length queries WordFilter.f may be made.
    words[i] has length in range [1, 10].
    prefix, suffix have lengths in range [0, 10].
    words[i] and prefix, suffix queries consist of lowercase letters only.

* */

/**
 * @param {string[]} words
 */
var WordFilter = function (words: string[]) {
    this._prefixTrie = new TrieNode();
    this._suffixTrie = new TrieNode();

    words.forEach((word, i) => {
        const map = {key: word, weight: i};
        this._prefixTrie.push(word, map);
        this._suffixTrie.push(reverseString(word), map);
    });
};

/**
 * @param {string} prefix
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function (prefix: string, suffix: string): number {
    const wordsMatchPrefix: MapWordWeight = this._prefixTrie.search(prefix);
    const wordsMatchSuffix: MapWordWeight = this._suffixTrie.search(reverseString(suffix));

    const prefixSet = asWordsSet(wordsMatchPrefix);
    const suffixSet = asWordsSet(wordsMatchSuffix);

    return getMaxWeight(intersection(prefixSet, suffixSet));

    function asWordsSet(map: MapWordWeight) {
        return new Set(Object.keys(map));
    }

    function intersection(setA: Set<String>, setB: Set<String>): Set<String> {
        const _i: Set<String> = new Set();
        setB.forEach(v => {
            if (setA.has(v)) {
                _i.add(v);
            }
        });
        return _i;

        /*
        // Sadly this does not work because Set does not support reduce()
        // reference: https://stackoverflow.com/a/42624575
        return setB.reduce((intersection, v) => {
            if (setA.has(v)) {
                intersection.add(v);
            }
        }, new Set());
        * */
    }

    function getMaxWeight(set: Set<String>) {
        // TODO: investigate how to eliminate the "as any"
        return Math.max(-1, ... [...set].map(word => wordsMatchPrefix[word as any]));
    }
};

type MapWordWeight = { [k: string]: number };

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = Object.create(WordFilter).createNew(words)
 * var param_1 = obj.f(prefix,suffix)
 */

class TrieNode {
    private _words: MapWordWeight = {};
    private _children: { [k: string]: TrieNode } = {};

    public push(word: string, {key, weight}) {
        const length = word.length;
        let current: TrieNode = this;

        for (let i = 0; i < length; ++i) {
            // TODO: refactor
            current._words[key] = weight;

            const ch = getCh(word, i);
            const children = current._children;
            if (!(ch in children)) {
                children[ch] = new TrieNode();
            }
            current = children[ch];
        }

        current._words[key] = weight;
    }

    public search(xfix: string) {
        const length = xfix.length;
        let current: TrieNode = this;

        for (let i = 0; i < length; ++i) {
            const ch = getCh(xfix, i);

            current = current._children[ch];

            if (typeof current === "undefined") {
                return {};
            }
        }

        // TODO: defensive copying in PROD
        return current._words;
    }
}

function getCh(word, pos) {
    return word.charAt(pos);
}

function reverseString(word: string): string {
    return word.split("").reverse().join("");
}

export default WordFilter;