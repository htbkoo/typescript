/*
https://leetcode.com/problems/total-hamming-distance/description/

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Now your job is to find the total Hamming distance between all pairs of the given numbers.

Example:

Input: 4, 14, 2

Output: 6

Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case). So the answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.

Note:

    Elements of the given array are in the range of 0 to 10^9
    Length of the array will not exceed 10^4.

* */

type Digit = 0 | 1;

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    let binaryDigitsArray = nums.map(toBinaryDigits);
    const maxLength = binaryDigitsArray.reduce((maxLength, digits) => Math.max(maxLength, digits.length), binaryDigitsArray[0].length);
    return Array(maxLength).fill(0)
        .map(toHammingDistance)
        .reduce((a, b) => a + b, 0);

    function toBinaryDigits(num: number): Digit[] {
        return num.toString(2).split("").map(ch => parseInt(ch) as Digit);
    }

    function toHammingDistance(_, i): number {
        const initialCounts = {0: 0, 1: 0};
        const counts = binaryDigitsArray
            .map(getDigitOrZero)
            .reduce((obj, digit) => {
                obj[digit]++;
                return obj;
            }, initialCounts);
        return counts[0] * counts[1];

        function getDigitOrZero(digits: Digit[]): number {
            let length = digits.length;
            if (i >= length) {
                return 0;
            } else {
                return digits[length - 1 - i];
            }
        }
    }

};

export default totalHammingDistance;