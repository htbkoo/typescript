/*
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

    Your returned answers (both index1 and index2) are not zero-based.
    You may assume that each input would have exactly one solution and you may not use the same element twice.

Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.


* */

import * as _ from "lodash";

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers: number[], target: number): number[] {
    let lo = 0, hi = numbers.length - 1;

    do {
        const sum = numbers[lo] + numbers[hi];
        if (target === sum) {
            return [lo + 1, hi + 1];
        } else if (target < sum) {
            const newIndex = _.sortedIndex(numbers, target - numbers[lo]);
            hi = numbers[newIndex] === numbers[hi] ? newIndex - 1 : newIndex;
        } else {
            const newIndex = _.sortedIndex(numbers, target - numbers[hi]);
            lo = numbers[newIndex] === numbers[lo] ? newIndex + 1 : newIndex;
        }
    } while (lo < hi);

    throw new Error("No solutions");
};

export default twoSum;