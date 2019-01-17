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
    const chars = S.split("");

    let from = -1;
    const length = chars.length;
    const answer = new Array(length);

    for (let i = 0; i < length; ++i) {
        if (chars[i] === C) {
            if (from === -1) {
                for (let j = 0; j <= i; ++j) {
                    answer[j] = i - j;
                }
            } else {
                const middle = Math.floor((i + from) / 2);
                for (let j = from; j <= middle; ++j) {
                    answer[j] = j - from;
                }
                for (let j = middle + 1; j <= i; ++j) {
                    answer[j] = i - j;
                }

            }
            from = i;
        }
    }

    for (let i = from; i < length; ++i) {
        answer[i] = i - from;
    }

    return answer;
};

export default shortestToChar;