/*
https://leetcode.com/problems/binary-search/

Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1



Note:

    You may assume that all elements in nums are unique.
    n will be in the range [1, 10000].
    The value of each element in nums will be in the range [-9999, 9999].


* */

import * as _ from "lodash";

const NOT_EXIST = -1;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums: number[], target: number): number {
    let lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        const midValue = nums[mid];
        if (target === midValue) {
            return mid;
        } else if (target < midValue) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return NOT_EXIST;
};

const search_recursive_approach = function (nums: number[], target: number): number {
    return searchRecursive({nums, target, lo: 0, hi: nums.length - 1});
};

function searchRecursive({nums, target, lo, hi}: { hi: number; lo: number; nums: number[]; target: number }) {
    if (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        const midValue = nums[mid];
        if (target === midValue) {
            return mid;
        } else if (target < midValue) {
            return searchRecursive({nums, target, lo, hi: mid - 1});
        } else {
            return searchRecursive({nums, target, lo: mid + 1, hi});
        }
    } else {
        return NOT_EXIST;
    }
}

const search_lodash = function (nums: number[], target: number): number {
    return _.sortedIndexOf(nums, target);
};

export default search;