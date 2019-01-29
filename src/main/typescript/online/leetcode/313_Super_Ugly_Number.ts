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

import {MinHeap} from "./utils/313_Super_Ugly_Number_MinHeap";

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {

    const heap = MinHeap.newHeap([1]);
    const added = {};

    while (!heap.isEmpty()) {
        const number = heap.pop();
        n--;

        if (n <= 0) {
            return number;
        } else {
            primes.forEach(prime => {
                const newNumber = number * prime;
                if (!(newNumber in added)) {
                    added[newNumber] = true;
                    heap.push(newNumber);
                }
            });
        }
    }
    throw new Error("should not be able to reach here");
};

export default nthSuperUglyNumber;

