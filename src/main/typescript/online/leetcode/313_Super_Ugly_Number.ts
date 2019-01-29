/*
https://leetcode.com/problems/super-ugly-number/

Write a program to find the nth super ugly number.

Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k.

Example:

Input: n = 12, primes = [2,7,13,19]
Output: 32
Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12
             super ugly numbers given primes = [2,7,13,19] of size 4.

Note:

    1 is a super ugly number for any given primes.
    The given numbers in primes are in ascending order.
    0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.
    The nth super ugly number is guaranteed to fit in a 32-bit signed integer.

* */

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n: number, primes: number[]): number {
    const indices = primes.map(() => 0);
    const answers = [1];
    while (answers.length < n) {
        const nextAnswer = primes.reduce((min, prime, i) => Math.min(min, prime * answers[indices[i]]), Number.MAX_SAFE_INTEGER);
        primes.forEach((prime, i) => {
            if (nextAnswer === prime * answers[indices[i]]) {
                indices[i]++;
            }
        });
        answers.push(nextAnswer);
    }
    return answers[n - 1];
};

export default nthSuperUglyNumber;

