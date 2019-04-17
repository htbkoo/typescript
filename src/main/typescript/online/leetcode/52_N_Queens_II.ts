/*
https://leetcode.com/problems/n-queens-ii/

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example:

Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]

* */

import _ from "lodash";

const BLANK = ".", QUEEN = "Q";

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function (n: number): number {
    return dfs({n, queens: [], rcSums: [], rcDiffs: []});
};

function dfs({n, queens, rcSums, rcDiffs}: { n: number, queens: Array<number>, rcSums: Array<number>, rcDiffs: Array<number> }): number {
    const r = queens.length;
    if (r === n) {
        return 1;
    } else {
        return _.sum(_.range(n).map(c => {
            const sum = r + c;
            const diff = r - c;
            if (canPlaceNewQueen()) {
                return dfs({n, queens: queens.concat(c), rcSums: rcSums.concat(sum), rcDiffs: rcDiffs.concat(diff)});
            } else {
                return 0;
            }

            function canPlaceNewQueen(): boolean {
                const isColumnFree = queens.every(v => v !== c);
                const isRcSumFree = rcSums.every(v => v !== sum);
                const isRcDiffFree = rcDiffs.every(v => v !== diff);
                return isColumnFree && isRcSumFree && isRcDiffFree;
            }
        }));
    }

    function flattenArray(prev: number[][], curr: number[][]): number[][] {
        return prev.concat(curr);
    }
}

export default totalNQueens;