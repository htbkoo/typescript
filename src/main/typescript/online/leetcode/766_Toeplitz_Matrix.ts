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

import _ from "lodash";

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix: number[][]): boolean {
    const height = matrix.length;
    if (height > 0) {
        const width = matrix[0].length;
        return areAllFirstColumnToeplitz() && areAllFirstRowToeplitz();

        function areAllFirstColumnToeplitz() {
            return _.range(height).every(row => isToeplitz({row, col: 0}));
        }

        function areAllFirstRowToeplitz() {
            return _.range(1, width).every(col => isToeplitz({row: 0, col}));
        }

        function isToeplitz({row, col}: { row: number, col: number }) {
            const firstElement = matrix[row][col];
            const numElements = Math.min(width - col, height - row);
            return _.range(1, numElements).every(i => firstElement === matrix[row + i][col + i]);
        }
    } else {
        return true;
    }
};

export default isToeplitzMatrix;