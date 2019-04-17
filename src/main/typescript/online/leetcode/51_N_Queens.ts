/*
https://leetcode.com/problems/n-queens/

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

* */

import _ from "lodash";

const BLANK = ".", QUEEN = "Q";
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n: number): string[][] {
    return dfs({n, queens: [], rcSums: [], rcDiffs: []}).map(solutionToString);

    function solutionToString(solution: number[]): string[] {
        return solution.map(rowToString);
    }

    function rowToString(row: number): string {
        return _.repeat(BLANK, row) + QUEEN + _.repeat(BLANK, n - 1 - row);
    }
};

function dfs({n, queens, rcSums, rcDiffs}: { n: number, queens: Array<number>, rcSums: Array<number>, rcDiffs: Array<number> }): Array<Array<number>> {
    const r = queens.length;
    if (r === n) {
        return [queens];
    } else {
        return _.range(n).map(c => {
            const sum = r + c;
            const diff = r - c;
            if (canPlaceNewQueen()) {
                return dfs({n, queens: queens.concat(c), rcSums: rcSums.concat(sum), rcDiffs: rcDiffs.concat(diff)});
            } else {
                return [];
            }

            function canPlaceNewQueen(): boolean {
                const isColumnFree = queens.every(v => v !== c);
                const isRcSumFree = rcSums.every(v => v !== sum);
                const isRcDiffFree = rcDiffs.every(v => v !== diff);
                return isColumnFree && isRcSumFree && isRcDiffFree;
            }
        }).reduce(flattenArray, []);
    }

    function flattenArray(prev: number[][], curr: number[][]): number[][] {
        return prev.concat(curr);
    }
}

export default solveNQueens;