/*
https://leetcode.com/problems/transpose-matrix/description/

Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.



Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]

Example 2:

Input: [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]



Note:

    1 <= A.length <= 1000
    1 <= A[0].length <= 1000

* */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A: number[][]): number[][] {
    // assume the matrix is retangular
    const height = A.length;
    if (height === 0) {
        return A;
    } else {
        const width = A[0].length;
        const At = [];
        for (let i = 0; i < width; ++i) {
            const row = [];
            for (let j = 0; j < height; ++j) {
                row.push(A[j][i]);
            }
            At.push(row);
        }
        return At;
    }
};

export default transpose;