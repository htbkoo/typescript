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
    // "97:a,98:b,99:c,100:d,101:e,102:f,103:g,104:h,105:i,106:j,107:k,108:l,109:m,110:n,111:o,112:p,113:q,114:r,115:s,116:t,117:u,118:v,119:w,120:x,121:y,122:z";
    const MAP = {
        a: 97,
        b: 98,
        c: 99,
        d: 100,
        e: 101,
        f: 102,
        g: 103,
        h: 104,
        i: 105,
        j: 106,
        k: 107,
        l: 108,
        m: 109,
        n: 110,
        o: 111,
        p: 112,
        q: 113,
        r: 114,
        s: 115,
        t: 116,
        u: 117,
        v: 118,
        w: 119,
        x: 120,
        y: 121,
        z: 122
    };
    const length1 = s1.length, length2 = s2.length;

    let lastRow = new Array(length1);
    lastRow.unshift(0);

    let s1Ascii = s1.split("").map(ch => MAP[ch]),
        s2Ascii = s2.split("").map(ch => MAP[ch]);
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
                currentRow[j] = Math.min(currentRow[j - 1] + MAP[char1], lastRow[j] + MAP[char2]);
            }
        }
        lastRow = currentRow;
    }

    return lastRow[length1];
};

export default minimumDeleteSum;