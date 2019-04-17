/*
https://leetcode.com/problems/next-greater-element-i/

 You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.

Example 2:

Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.

Note:

    All elements in nums1 and nums2 are unique.
    The length of both nums1 and nums2 would not exceed 1000.

* */

import _ from "lodash";

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const NO_GREATER_ELEMENT = -1;

const nextGreaterElement = function (nums1: number[], nums2: number[]): number[] {
    const nextGreaterElements = buildNextGreaterElements();

    return nums1.map(num => nextGreaterElements[num]);

    function buildNextGreaterElements() {
        const lengthNums2 = nums2.length;
        const lastNums2Element = nums2[lengthNums2 - 1];
        const nextGreaterElements = {};
        nextGreaterElements[lastNums2Element] = NO_GREATER_ELEMENT;
        const stack = [lastNums2Element];
        _.rangeRight(lengthNums2 - 1).forEach(index => {
            const element = nums2[index];
            while (stack.length > 0 && stack[stack.length - 1] <= element) {
                stack.pop();
            }
            nextGreaterElements[element] = (stack.length === 0) ? NO_GREATER_ELEMENT : stack[stack.length - 1];
            stack.push(element);
        });

        return nextGreaterElements;
    }
};

export default nextGreaterElement;