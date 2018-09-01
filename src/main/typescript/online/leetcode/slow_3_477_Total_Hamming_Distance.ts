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

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums: number[]): number {
    let size = nums.length;
    if (size < 2) {
        return 0;
    }

    let total = 0, max;
    do {
        max = 0;
        const oneCount = nums.map(num => num % 2).reduce(toSum, 0);
        total += (size - oneCount) * oneCount;
        nums = nums.map(num => {
            let newNum = (num >>> 1);
            max = Math.max(max, newNum);
            return newNum;
        });
    } while (max > 0);

    return total;

    function toSum(a, b) {
        return a + b;
    }
};

export default totalHammingDistance;