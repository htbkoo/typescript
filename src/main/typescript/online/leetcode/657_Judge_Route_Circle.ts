/*
https://leetcode.com/problems/judge-route-circle/description/

Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:

Input: "UD"
Output: true



Example 2:

Input: "LL"
Output: false

* */

const DIRECTIONS = {
    U: {dx: 0, dy: -1},
    D: {dx: 0, dy: 1},
    L: {dx: -1, dy: 0},
    R: {dx: 1, dy: 0},
};

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves: string): boolean {
    let origin = {dx: 0, dy: 0};
    let result = moves.split("")
        .reduce(({dx, dy}, move) => {
            const step = DIRECTIONS[move];
            return {
                dx: dx + step.dx,
                dy: dy + step.dy,
            }
        }, origin);
    return result.dx === 0 && result.dy === 0;
};

export default judgeCircle;