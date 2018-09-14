/*
https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

448. Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

* */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums: number[]): number[] {
    const length = nums.length;
    const disappeared = Array(length).fill(1);
    for (let i = 0; i < length; ++i) {
        const pointer = nums[i] - 1;
        disappeared[pointer] = 0;
    }
    let numDisappeared = 0;
    for (let i = 0; i < length; ++i) {
        if (disappeared[i] === 1) {
            disappeared[numDisappeared] = i + 1;
            numDisappeared++;
        }
    }
    return disappeared.splice(0, numDisappeared);
};

export default findDisappearedNumbers;