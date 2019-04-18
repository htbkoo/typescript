/*
https://leetcode.com/problems/minimum-falling-path-sum/

Given a square array of integers A, we want the minimum sum of a falling path through A.

A falling path starts at any element in the first row, and chooses one element from each row.  The next row's choice must be in a column that is different from the previous row's column by at most one.



Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: 12
Explanation:
The possible falling paths are:

    [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
    [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
    [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]

The falling path with the smallest sum is [1,4,7], so the answer is 12.



Note:

    1 <= A.length == A[0].length <= 100
    -100 <= A[i][j] <= 100
* */

import * as _ from "lodash";

/**
 * @param {number[][]} A
 * @return {number}
 */
const minFallingPathSum = function (A: number[][]): number {
    const height = A.length;
    if (height > 0) {
        const width = A[0].length;

        let prevRow = A[0].slice();

        _.range(1, height).forEach(row => {
            prevRow = A[row].map((a, col) => a + _.min(_.range(-1, 2).map(d => safeGet(col + d))));
        });

        return _.min(prevRow);

        function safeGet(col: number) {
            const isWithinMatrix = (col >= 0) && (col < width);
            if (isWithinMatrix) {
                return prevRow[col];
            } else {
                return Number.MAX_SAFE_INTEGER;
            }
        }

    } else {
        return 0;
    }
};

export default minFallingPathSum;