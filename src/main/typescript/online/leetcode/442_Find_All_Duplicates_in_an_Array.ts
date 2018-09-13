/*
https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

442. Find All Duplicates in an Array

Given an array of integers, 1 ≦ a[i] ≦ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]

* */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums: number[]): number[] {
    const length = nums.length, duplicates = [];
    for (let i = 0; i < length; ++i) {
        const pointer = Math.abs(nums[i]) - 1;
        if (nums[pointer] > 0) {
            nums[pointer] = -nums[pointer];
        } else {
            duplicates.push(pointer + 1);
        }
    }
    return duplicates;
};

export default findDuplicates;