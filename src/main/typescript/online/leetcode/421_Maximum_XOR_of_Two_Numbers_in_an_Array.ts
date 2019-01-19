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
    if (!nums || nums.length < 2) {
        return 0;
    }

    let max = 0, mask = 0;

    for (let i = 31; i >= 0; --i) {
        mask = mask | (1 << i);

        const prefixes: Set<number> = new Set();
        nums.forEach(num => prefixes.add(num & mask));

        const candidate = max | (1 << i);
        for (let prefix of prefixes) {
            if (prefixes.has(candidate ^ prefix)) {
                max = candidate;
                break;
            }
        }
    }
    return max;
};

export default findMaximumXOR;