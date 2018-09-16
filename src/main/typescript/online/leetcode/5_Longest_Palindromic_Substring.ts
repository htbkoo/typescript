/*
https://leetcode.com/problems/longest-palindromic-substring/description/

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:

Input: "cbbd"
Output: "bb"

* */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s: string): string {
    const length = s.length;
    if (length === 0) {
        return "";
    }

    const chars = s.split("");

    const oddLongest = findOddLengthLongestPalindrome();
    const evenLongest = findEvenLengthLongestPalindrome();

    return getLongerString(oddLongest, evenLongest);

    function findOddLengthLongestPalindrome(): string {
        let longest = "";

        let prev = [], curr = [];
        for (let j = 0; j <= (length / 2); ++j) {
            for (let i = 0; i < length; ++i) {
                const isPalindrome = isInRange(i, j) && prev[i] && isSameChar(i - j, i + j);
                if (isPalindrome) {
                    let newString = chars[i - j] + prev[i] + chars[i + j];
                    curr.push(newString);
                    longest = getLongerString(newString, longest);
                } else {
                    curr.push(undefined);
                }
            }
            prev = curr;
            curr = [];
        }

        function isInRange(i, j): boolean {
            return ((i + j) < length) && ((i - j) >= 0);
        }

        function isSameChar(i, j): boolean {
            return chars[i] === chars[j];
        }

        return longest;
    }

    function findEvenLengthLongestPalindrome(): string {
        return ""
    }

    function getLongerString(first: string, second: string): string {
        if (first.length > second.length) {
            return first;
        } else {
            return second;
        }
    }
};

export default longestPalindrome;