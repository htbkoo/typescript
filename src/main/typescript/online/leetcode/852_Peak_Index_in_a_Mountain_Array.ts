/*
https://leetcode.com/problems/peak-index-in-a-mountain-array/description/

Let's call an array A a mountain if the following properties hold:

    A.length >= 3
    There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]

Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Example 1:

Input: [0,1,0]
Output: 1

Example 2:

Input: [0,2,1,0]
Output: 1

Note:

    3 <= A.length <= 10000
    0 <= A[i] <= 10^6
    A is a mountain, as defined above.

* */

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A: number[]): number {
    const length = A.length;
    let max = length - 1, min = 0;
    let i = getMid(min, max);
    while (max > min) {
        let current = A[i];
        let prev = A[i - 1];
        let next = A[i + 1];
        if ((prev < current) && (current > next)) {
            return i;
        } else if (current < next) {
            min = i;
        } else {
            max = i;
        }
        i = getMid(min, max)
    }
    return -1;
};

function getMid(min: number, max: number) {
    return Math.floor((max + min) / 2);
}

export default peakIndexInMountainArray;