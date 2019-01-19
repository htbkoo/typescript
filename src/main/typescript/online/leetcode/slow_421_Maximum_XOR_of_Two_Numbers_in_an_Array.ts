/*
https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/description/

Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

Could you do this in O(n) runtime?

Example:

Input: [3, 10, 5, 25, 2, 8]

Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.

* */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums: number[]): number {
    // O(n^2) solution

    // ... validate input, e.g. not undefined, length >= 2

    if (nums.length < 2) {
        return 0; /// from running code on leetcode
    } else {

        const length = nums.length;

        let max = nums[0] ^ nums[1];

        for (let i = 0; i < length; ++i) {
            for (let j = i + 1; j < length; ++j) {
                max = Math.max(max, nums[i] ^ nums[j]);
            }
        }

        return max;
    }
};

export default findMaximumXOR;