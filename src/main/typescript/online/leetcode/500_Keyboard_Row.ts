/*
https://leetcode.com/problems/keyboard-row/

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.





Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]



Note:

    You may use one character in the keyboard more than once.
    You may assume the input string will only contain letters of alphabet.

* */

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words: string[]): string[] {
    return words.filter(isSameRow);
};

function isSameRow(word) {
    return new Set(word.toLowerCase().split("").map(toRow)).size === 1
}

const MAPPING = {
    "q": 0,
    "w": 0,
    "e": 0,
    "r": 0,
    "t": 0,
    "y": 0,
    "u": 0,
    "i": 0,
    "o": 0,
    "p": 0,

    "a": 1,
    "s": 1,
    "d": 1,
    "f": 1,
    "g": 1,
    "h": 1,
    "j": 1,
    "k": 1,
    "l": 1,

    "z": 2,
    "x": 2,
    "c": 2,
    "v": 2,
    "b": 2,
    "n": 2,
    "m": 2,

};

function toRow(letter) {
    return MAPPING[letter];
}

export default findWords;