/*
https://leetcode.com/problems/hamming-distance/description/

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≦ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

* */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x: number, y: number): number {
    const binX = asBinary(x);
    const binY = asBinary(y);

    const maxLength = Math.max(binX.length, binY.length);

    return Array(maxLength).fill(0)
        .map(toHammingDistances)
        .reduce((a, b) => a + b, 0);


    function asBinary(num: number): number[] {
        return num.toString(2).split("").map(ch => parseInt(ch)); // reference: https://stackoverflow.com/a/9939785
    }

    function toHammingDistances(_, i) {
        let xd = getFromRightOrZero(binX, i), yd = getFromRightOrZero(binY, i);
        return xd === yd ? 0 : 1;
    }

    function getFromRightOrZero(binaryDigits: number[], pos: number) {
        const length = binaryDigits.length;
        if (pos >= length) {
            return 0;
        } else {
            return binaryDigits[length - 1 - pos];
        }
    }
};

export default hammingDistance;