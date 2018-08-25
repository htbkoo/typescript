/*

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

* */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s: string): number {
    let max = 0, remaining = 0;
    s.split("").reduce((o, c) => {
        if (o[c] === 1) {
            max += 2;
            remaining--;
            o[c] = 0;
        } else {
            remaining++;
            o[c] = 1;
        }
        return o;
    }, {});

    return max + (remaining > 0 ? 1 : 0);
};

var slow_longestPalindrome = function (s: string): number {
    let max = 0;
    let occurrences = s.split("").reduce((o, c) => {
        if (o[c] === 1) {
            max += 2;
            o[c] = 0;
        } else {
            o[c] = 1;
        }
        return o;
    }, {});

    return max + (Object.keys(occurrences).some(k => occurrences[k] > 0) ? 1 : 0);
};

export default longestPalindrome;