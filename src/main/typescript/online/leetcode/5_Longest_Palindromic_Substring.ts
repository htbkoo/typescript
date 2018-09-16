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
        let longest = chars[0];
        let prev = chars.slice(), curr = [];
        for (let j = 1; j <= (length / 2); ++j) {
            let any = false;
            for (let i = 0; i < length; ++i) {
                const low = i - j, high = i + j;
                const isPalindrome = isInRange(low, high) && isDefined(prev[i]) && isSameChar(low, high);
                if (isPalindrome) {
                    any = true;

                    const char = chars[low];
                    let newString = char + prev[i] + char;
                    curr.push(newString);
                    longest = getLongerString(newString, longest);
                } else {
                    curr.push(undefined);
                }
            }
            if (!any) {
                break;
            }
            prev = curr;
            curr = [];
        }

        return longest;
    }

    function findEvenLengthLongestPalindrome(): string {
        let longest = "";

        let prev = Array(length).fill(""), curr = [];
        for (let j = 1; j <= (length / 2) + 1; ++j) {
            let any = false;
            for (let i = 0; i < length; ++i) {
                const low = i - (j - 1), high = i + j;
                const isPalindrome = isInRange(low, high) && isDefined(prev[i]) && isSameChar(low, high);
                if (isPalindrome) {
                    any = true;

                    const char = chars[low];
                    let newString = char + prev[i] + char;
                    curr.push(newString);
                    longest = getLongerString(newString, longest);
                } else {
                    curr.push(undefined);
                }
            }
            if (!any) {
                break;
            }
            prev = curr;
            curr = [];
        }

        return longest;
    }

    function isInRange(low, high): boolean {
        return (low >= 0) && (high < length);
    }

    function isDefined(val): boolean {
        return typeof val !== "undefined";
    }

    function isSameChar(i, j): boolean {
        return chars[i] === chars[j];
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