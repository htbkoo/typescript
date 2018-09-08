/*
https://leetcode.com/problems/ugly-number-ii/description/

Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example:

Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note:

    1 is typically treated as an ugly number.
    n does not exceed 1690.

* */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n: number): number {
    // reference: http://fisherlei.blogspot.com/2015/10/leetcode-ugly-number-ii-solution.html
    const arr = [1];
    const pt = {2: 0, 3: 0, 5: 0};
    while (arr.length < n) {
        let keys = Object.keys(pt);
        const values = keys.map(key => parseInt(key))
            .reduce((obj, key: number) => {
                obj[key] = arr[pt[key]] * key;
                return obj;
            }, {});

        const min = keys.reduce((min, key) => Math.min(values[key], min), values[keys[0]]);
        arr.push(min);

        keys.forEach(key => {
            if (min === values[key]) {
                ++pt[key];
            }
        });
    }

    return arr[n - 1];
};

export default nthUglyNumber;