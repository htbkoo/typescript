/*
https://leetcode.com/problems/find-common-characters/

Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.



Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]



Note:

    1 <= A.length <= 100
    1 <= A[i].length <= 100
    A[i][j] is a lowercase letter

* */

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A: string[]): string[] {
    const commonFreq =
        A.splice(1)
            .map(countCharFreq)
            .reduce(
                getMinFreq,
                countCharFreq(A[0])
            );

    return Object.keys(commonFreq)
        .reduce(
            (arr, ch) => arr.concat(getRepeatedCharArray(ch, commonFreq[ch])),
            []
        );

    function countCharFreq(str: string): { [ch: string]: number } {
        return str.split("").reduce((obj, char) => {
            if (char in obj) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
            return obj;
        }, {});
    }

    function getMinFreq(obj, curr) {
        return Object.keys(curr).reduce((o, ch) => {
            if (ch in obj) {
                o[ch] = Math.min(obj[ch], curr[ch]);
            }
            return o;
        }, {})
    }

    function getRepeatedCharArray(ch, freq: number) {
        return ch.repeat(freq).split("");
    }
};

export default commonChars;