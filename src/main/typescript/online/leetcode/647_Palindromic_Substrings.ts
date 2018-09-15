/*
https://leetcode.com/problems/palindromic-substrings/description/

 Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

Note:

    The input string length won't exceed 1000.

* */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s: string): number {
    const chars = s.split(""), length = s.length;

    // imaginary row zero, used by row 2
    let prev = Array(length).fill(true);

    // first row, representing the split single characters, must be palindrome
    let count = length;
    let curr = Array(length).fill(true);

    let next = [];

    for (let i = 1; i < length; ++i) {
        for (let j = 0; j < length - i; ++j) {
            const isPalindrome = (chars[j] === chars[j + i]) && prev[j + 1];
            next.push(isPalindrome);
            if (isPalindrome) {
                count++;
            }
        }
        prev = curr;
        curr = next;
        next = [];
    }

    return count;
};

export default countSubstrings;