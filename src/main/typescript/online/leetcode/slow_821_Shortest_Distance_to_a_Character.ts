/*
https://leetcode.com/problems/shortest-distance-to-a-character/

Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]



Note:

    S string length is in [1, 10000].
    C is a single character, and guaranteed to be in string S.
    All letters in S and C are lowercase.

* */

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S: string, C: string): number[] {
    const occurrences = [];
    const chars = S.split("");

    for (let i = 0; i < chars.length; ++i) {
        if (chars[i] === C) {
            occurrences.push(i);
        }
    }

    let pointer = 1;
    return chars.map((_, i) => {
        if (occurrences.length === 1) {
            return Math.abs(i - occurrences[0]);
        } else {
            const distToCurr = Math.abs(i - occurrences[pointer]);
            const distToPrev = Math.abs(i - occurrences[pointer - 1]);

            if (distToPrev < distToCurr) {
                return distToPrev;
            } else {
                if (!isLastOccurrence()) {
                    pointer++;
                }
                return distToCurr;
            }

            function isLastOccurrence(): boolean {
                return pointer >= occurrences.length - 1;
            }
        }
    })
};

export default shortestToChar;