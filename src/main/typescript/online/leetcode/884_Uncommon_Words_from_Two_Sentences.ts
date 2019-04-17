/*
https://leetcode.com/problems/uncommon-words-from-two-sentences/

We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words.

You may return the list in any order.

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]

Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]



Note:

    0 <= A.length <= 200
    0 <= B.length <= 200
    A and B both contain only spaces and lowercase letters.

* */

import _ from "lodash";

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = function (A: string, B: string): string[] {
    const wordFreqA = toFrequenciesMap(A);
    const wordFreqB = toFrequenciesMap(B);

    const uncommonA = getUncommon(wordFreqA, wordFreqB);
    const uncommonB = getUncommon(wordFreqB, wordFreqA);

    return uncommonA.concat(uncommonB);
};

function getUncommon(source, against) {
    return Object.keys(source).filter(word => source[word] === 1).filter(word => !(word in against));
}

function toFrequenciesMap(str: string) {
    return _.countBy(str.split(" "));
}

export default uncommonFromSentences;