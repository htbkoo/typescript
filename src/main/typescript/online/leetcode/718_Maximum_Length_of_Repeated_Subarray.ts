/*
https://leetcode.com/contest/leetcode-weekly-contest-56/problems/maximum-length-of-repeated-subarray/

Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

Example 1:

Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation:
The repeated subarray with maximum length is [3, 2, 1].

Note:

    1 <= len(A), len(B) <= 1000
    0 <= A[i], B[i] < 100

* */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A: number[], B: number[]): number {
    let lenA = A.length, lenB = B.length;
    if (lenA === 0 || lenB === 0) {
        return 0;
    }
    if (lenA > lenB) {
        const temp = A;
        A = B;
        B = temp;
    }

    let max = 0;
    let row = Array(A.length + 1).fill(0), next = [0];
    for (let i = 0; i < B.length; ++i) {
        for (let j = 0; j < A.length; ++j) {
            if (B[i] === A[j]) {
                let curLength = row[j] + 1;
                next.push(curLength);
                max = Math.max(max, curLength)
            } else {
                next.push(0);
            }
        }
        row = next;
        next = [0];
    }
    return max;
};

export default findLength;