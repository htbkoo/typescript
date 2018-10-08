/*
https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/

Given two strings s1, s2, find the lowest ASCII sum of deleted characters to make two strings equal.

Example 1:

Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

Example 2:

Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.

Note:
0 < s1.length, s2.length <= 1000.
All elements of each string will have an ASCII value in [97, 122].

* */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1: string, s2: string): number {
    const length1 = s1.length, length2 = s2.length;

    let lastRow = new Array(length1);
    lastRow.unshift(0);

    let s1Ascii = s1.split("").map(ch => ch.charCodeAt(0)),
        s2Ascii = s2.split("").map(ch => ch.charCodeAt(0));
    for (let i = 1; i <= length1; ++i) {
        lastRow[i] = s1Ascii[i - 1] + lastRow[i - 1];
    }

    for (let i = 0; i < length2; ++i) {
        let currentRow = new Array(length1);
        currentRow[0] = lastRow[0] + s2Ascii[i];
        for (let j = 1; j <= length1; ++j) {
            let char1 = s1.charAt(j - 1), char2 = s2.charAt(i);
            if (char1 === char2) {
                currentRow[j] = lastRow[j - 1];
            } else {
                currentRow[j] = Math.min(currentRow[j - 1] + char1.charCodeAt(0), lastRow[j] + char2.charCodeAt(0));
            }
        }
        lastRow = currentRow;
    }

    return lastRow[length1];
};

export default minimumDeleteSum;