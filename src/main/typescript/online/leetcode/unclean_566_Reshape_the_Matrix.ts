/*
https://leetcode.com/problems/reshape-the-matrix/

In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:

Input:
nums =
[[1,2],
 [3,4]]
r = 1, c = 4
Output:
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.

Example 2:

Input:
nums =
[[1,2],
 [3,4]]
r = 2, c = 4
Output:
[[1,2],
 [3,4]]
Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.

Note:

    The height and width of the given matrix is in range [1, 100].
    The given r and c are all positive.
 */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums: number[][], r: number, c: number): number[][] {
    if (!nums || nums.length === 0) {
        return nums;
    } else if (!isReshapePossible()) {
        return nums;
    } else {
        return reshapeNaive();
    }

    function isReshapePossible(): boolean {
        const expectedNumCell = r * c;
        return actualNumCell() === expectedNumCell;
    }

    function actualNumCell(): number {
        // if the matrix may be non-rectangular?
        // return nums.reduce((size, row) => size + row.length, 0);

        // assume the matrix is rectangular
        const height = nums.length, width = nums[0].length;
        return width * height;
    }

    function reshapeNaive(): number[][] {
        let i = 0, j = -1;

        return [...Array(r)].map(() =>
            [...Array(c)].map(() => {
                j++;
                if (j >= nums[i].length) {
                    i++;
                    j = 0;
                }
                return nums[i][j];
            })
        );
    }
};

export default matrixReshape;