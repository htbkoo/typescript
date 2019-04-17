/*
https://leetcode.com/problems/toeplitz-matrix/

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.


Example 1:

Input:
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
Output: True
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.

Example 2:

Input:
matrix = [
  [1,2],
  [2,2]
]
Output: False
Explanation:
The diagonal "[1, 2]" has different elements.


Note:

    matrix will be a 2D array of integers.
    matrix will have a number of rows and columns in range [1, 20].
    matrix[i][j] will be integers in range [0, 99].


Follow up:

    What if the matrix is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?
    What if the matrix is so large that you can only load up a partial row into the memory at once?

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