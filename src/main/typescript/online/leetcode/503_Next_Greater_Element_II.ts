/*
https://leetcode.com/problems/next-greater-element-ii/

 Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

Example 1:

Input: [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2;
The number 2 can't find next greater number;
The second 1's next greater number needs to search circularly, which is also 2.

Note: The length of given array won't exceed 10000.

* */

import _ from "lodash";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const NO_GREATER_ELEMENT = -1;
const nextGreaterElements = function (nums: number[]): number[] {
    const numsDup = nums.concat(nums);
    const stack = [];

    return _.rangeRight(numsDup.length).map(i => {
        const element = numsDup[i];
        while (!isStackEmpty() && element >= stackTop()) {
            stack.pop();
        }

        const nextGreaterElement = isStackEmpty() ? NO_GREATER_ELEMENT : stackTop();
        stack.push(element);

        return nextGreaterElement;
    }).reverse().splice(0, nums.length);

    function isStackEmpty() {
        return stack.length === 0;
    }

    function stackTop() {
        return stack[stack.length - 1];
    }
};

export default nextGreaterElements;