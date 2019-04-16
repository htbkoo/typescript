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

interface Coordinates {
    r: Readonly<number>;
    c: Readonly<number>;
}

class Queen {
    readonly r: Readonly<number>;
    readonly c: Readonly<number>;

    constructor({r, c}: Coordinates) {
        this.r = r;
        this.c = c;
    }

    public static fromCoordinates(coordinates: Coordinates): Queen {
        return new Queen(coordinates);
    }

    isNotAttacking(other: Coordinates) {
        return !this.isSameRow(other)
            && !this.isSameColumn(other)
            && !this.isSameRightUpDiagonal(other)
            && !this.isSameRightDownDiagonal(other);
    }

    private isSameRow(other: Coordinates) {
        return this.r === other.r;
    }

    private isSameColumn(other: Coordinates) {
        return this.c === other.c;
    }

    private isSameRightUpDiagonal(other: Coordinates) {
        return (this.r + this.c) === (other.r + other.c);
    }

    private isSameRightDownDiagonal(other: Coordinates) {
        return (this.r - this.c) === (other.r - other.c);
    }
}

class Chess {
    private static readonly QUEEN = "Q";
    private static readonly BLANK = ".";

    public static asString(isQueen: boolean): string {
        return isQueen ? Chess.QUEEN : Chess.BLANK;
    }
}

class Configuration {
    private readonly queens: ReadonlyArray<Queen>;
    private readonly n: number;

    constructor(queens: Array<Queen>, n: number) {
        this.queens = queens;
        this.n = n;
    }

    public static empty(n: number) {
        return new Configuration([], n);
    }

    public static firstQueen({r, c, n}: { r: number, c: number, n: number }) {
        return new Configuration([Queen.fromCoordinates({r, c})], n);
    }

    public withQueen(coordinates: Coordinates) {
        const newQueens = this.queens.slice();
        newQueens.push(Queen.fromCoordinates(coordinates));
        return new Configuration(newQueens, this.n);
    }

    public asString(): Array<string> {
        const board: boolean[][] = _.range(this.n).map(() => _.range(this.n).map(() => false));

        this.queens.forEach(queen => board[queen.r][queen.c] = true);

        return board.map(row => row.map(position => Chess.asString(position)).join(""));
    }

    public canPlaceNewAt(coordinates: Coordinates): boolean {
        return this.queens.every(queen => queen.isNotAttacking(coordinates));
    }
}

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n: number): string[][] {
    return placeQueen({config: Configuration.empty(n), n, need: n}).map(configuration => configuration.asString());
};

function placeQueen({config, n, need, startRow = 0}: { config: Configuration, n: number, need: number, startRow?: number }): Configuration[] {
    if (need === 0) {
        return [config];
    } else {
        return _.range(startRow, n).map(r => {
            return _.range(n).map(c => {
                const breakPoint = need;
                if (config.canPlaceNewAt({r, c})) {
                    return placeQueen({config: config.withQueen({r, c}), n, need: need - 1, startRow: r});
                } else {
                    return [];
                }
            }).reduce(flattenArray, [])
        }).reduce(flattenArray, []);
    }
}

function flattenArray(prev, curr) {
    return prev.concat(curr);
}

export default solveNQueens;