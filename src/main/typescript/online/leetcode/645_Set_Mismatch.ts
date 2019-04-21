/*
https://leetcode.com/problems/set-mismatch/

The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]

Note:

    The given array size will in the range [2, 10000].
    The given array's numbers won't have any order.

* */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
    const frequencies = Array(nums.length).fill(0);

    nums.forEach(num => frequencies[num - 1]++);

    let missing, duplicated;
    frequencies.forEach((freq, index) => {
        const num = index + 1;
        if (freq === 0) {
            missing = num;
        } else if (freq > 1) {
            duplicated = num;
        }
    });

    return [duplicated, missing];
};

export default findErrorNums;