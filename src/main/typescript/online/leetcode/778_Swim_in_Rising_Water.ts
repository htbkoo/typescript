/*
https://leetcode.com/problems/swim-in-rising-water/description/

On an N x N grid, each square grid[i][j] represents the elevation at that point (i,j).

Now rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distance in zero time. Of course, you must stay within the boundaries of the grid during your swim.

You start at the top left square (0, 0). What is the least time until you can reach the bottom right square (N-1, N-1)?

Example 1:

Input: [[0,2],[1,3]]
Output: 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.

You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.

Example 2:

Input: [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
Output: 16
Explanation:
 0  1  2  3  4
24 23 22 21  5
12 13 14 15 16
11 17 18 19 20
10  9  8  7  6

The final route is marked in bold.
We need to wait until time 16 so that (0, 0) and (4, 4) are connected.

Note:

    2 <= N <= 50.
    grid[i][j] is a permutation of [0, ..., N*N - 1].

* */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid: number[][]): number {
    const n = grid.length;
    const added: boolean[][] = Array(n).fill(0).map(() => Array(n).fill(false));
    const heap = new SwimInWaterHeap();

    let min = grid[0][0];

    add(0, 0);
    do {
        let nextSquare: Square = heap.pop();
        var {x, y} = nextSquare;

        visit(x, y);

        min = Math.max(min, nextSquare.depth);
    } while (x !== n - 1 || y !== n - 1);

    return min;

    function add(x, y) {
        added[y][x] = true;
        heap.push(square(x, y));
    }

    function visit(x, y) {
        [
            {dx: -1, dy: 0},
            {dx: 0, dy: -1},
            {dx: 1, dy: 0},
            {dx: 0, dy: 1},
        ].forEach(({dx, dy}) => {
            let nx = x + dx, ny = y + dy;
            if (isInRange(nx, ny) && !added[ny][nx]) {
                add(nx, ny);
            }
        });
    }

    function isInRange(x, y) {
        return x >= 0 && y >= 0 && x < n && y < n;
    }

    function square(x, y): Square {
        return new Square(x, y, grid[y][x], n);
    }
};

class Square {
    public x;
    public y;
    public depth;
    public isBest: boolean;

    constructor(x, y, depth, n: number) {
        this.x = x;
        this.y = y;
        this.depth = depth;
        this.isBest = ((x === n - 1) && (y === n - 1));
    }
}

export class SwimInWaterHeap {
    private readonly _squares: Square[] = [];

    push(sq: Square) {
        this._squares.push(sq);
        this._pullUp(this._size() - 1);
    }

    pop(): Square {
        const size = this._size();
        if (size === 0) {
            throw new Error("heap is empty");
        } else if (size == 1) {
            return this._squares.pop();
        } else {
            const square = this._squares[0];
            this._squares[0] = this._squares.pop();
            this._pushDown(0);
            return square;
        }
    }

    private _size(): number {
        return this._squares.length;
    }

    private _pullUp(pos: number) {
        const isRoot = pos === 0;
        if (!isRoot) {
            const parentPos = Math.floor((pos - 1) / 2);
            if (this._isFirstBetter(pos, parentPos)) {
                this._swap(pos, parentPos);
                this._pullUp(parentPos);
            }
        }
    }

    private _isFirstBetter(pos: number, otherPos: number): boolean {
        let first = this._squares[pos], second = this._squares[otherPos];
        if (second.isBest) {
            return false;
        } else if (first.isBest) {
            return true;
        } else {
            return first.depth < second.depth;
        }
    }

    private _swap(pos: number, otherPos: number) {
        const temp: Square = this._squares[pos];
        this._squares[pos] = this._squares[otherPos];
        this._squares[otherPos] = temp;
    }

    private _pushDown(pos: number) {
        const numChildren = this._getNumChildren(pos);
        if (numChildren > 0) {
            const bestChildrenPos = this._getBestChildren(pos, numChildren);
            if (this._isFirstBetter(bestChildrenPos, pos)) {
                this._swap(bestChildrenPos, pos);
                this._pushDown(bestChildrenPos);
            }
        }
    }

    private _getNumChildren(pos: number) {
        return Math.min(2, Math.max(0, this._size() - (2 * pos + 1)));
    }

    private _getBestChildren(pos: number, numChildren: number) {
        const left = 2 * pos + 1;
        switch (numChildren) {
            case 1:
                return left;
            case 2: {
                const right = 2 * pos + 2;
                if (this._isFirstBetter(right, left)) {
                    return right;
                } else {
                    return left;
                }
            }
        }
        throw new Error(`unexpected numChildren: ${numChildren}`);
    }
}

// noinspection JSUnusedLocalSymbols
var slow_but_AC_swimInWater = function (grid: number[][]): number {
    const n = grid.length;
    const distanceTo = grid.map(row => row.map(() => Number.MAX_VALUE));
    distanceTo[0][0] = grid[0][0];

    for (let k = 1; k <= n * 3; ++k) {
        for (let j = Math.min(2 * (n - 1)); j > 0; --j) {
            const start = Math.max(0, j - (n - 1));
            let iteration = start + (n - Math.abs(n - 1 - j));
            for (let i = start; i < iteration; ++i) {
                // noinspection UnnecessaryLocalVariableJS
                const x = j - i, y = i;
                refresh(x, y);
            }
        }
    }
    refresh(n - 1, n - 1);
    return distanceTo[n - 1][n - 1];

    function refresh(x, y) {
        const bestNeighbour = getBestNeighbour(x, y);
        distanceTo[x][y] = Math.max(grid[x][y], bestNeighbour);
    }


    function getBestNeighbour(x, y) {
        return [
            {dx: -1, dy: 0},
            {dx: 0, dy: -1},
            {dx: 1, dy: 0},
            {dx: 0, dy: 1},
        ].reduce((best, {dx, dy}) => {
            let nx = x + dx, ny = y + dy;
            if (isInRange(nx, ny)) {
                return Math.min(best, distanceTo[nx][ny]);
            } else {
                return best
            }
        }, Number.MAX_VALUE);
    }

    function isInRange(x, y) {
        return x >= 0 && y >= 0 && x < n && y < n;
    }
};

// noinspection JSUnusedLocalSymbols
var TLE_swimInWater = function (grid: number[][]): number {
    const n = grid.length;
    const distanceTo = grid.map(row => row.map(() => Number.MAX_VALUE));
    distanceTo[0][0] = grid[0][0];

    for (let k = 1; k <= n * n; ++k) {
        for (let j = Math.min(2 * (n - 1)); j > 0; --j) {
            const start = Math.max(0, j - (n - 1));
            let iteration = start + (n - Math.abs(n - 1 - j));
            for (let i = start; i < iteration; ++i) {
                // noinspection UnnecessaryLocalVariableJS
                const x = j - i, y = i;
                refresh(x, y);
            }
        }
    }
    refresh(n - 1, n - 1);
    return distanceTo[n - 1][n - 1];

    function refresh(x, y) {
        const bestNeighbour = getBestNeighbour(x, y);
        distanceTo[x][y] = Math.max(grid[x][y], bestNeighbour);
    }


    function getBestNeighbour(x, y) {
        return [
            {dx: -1, dy: 0},
            {dx: 0, dy: -1},
            {dx: 1, dy: 0},
            {dx: 0, dy: 1},
        ].reduce((best, {dx, dy}) => {
            let nx = x + dx, ny = y + dy;
            if (isInRange(nx, ny)) {
                return Math.min(best, distanceTo[nx][ny]);
            } else {
                return best
            }
        }, Number.MAX_VALUE);
    }

    function isInRange(x, y) {
        return x >= 0 && y >= 0 && x < n && y < n;
    }
};

export default swimInWater;