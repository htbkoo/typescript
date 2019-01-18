/*
https://leetcode.com/problems/fizz-buzz/

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]

* */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n: number): string[] {
    return new Array(n).fill(0)
        .map((_, i) => {
            const num = i + 1;
            const remainderFive = num % 5;
            const remainderThree = num % 3;
            if ((remainderFive === 0) && (remainderThree === 0)) {
                return "FizzBuzz";
            } else if (remainderFive === 0) {
                return "Buzz";
            } else if (remainderThree === 0) {
                return "Fizz";
            } else {
                return num.toString()
            }
        });
};

export default fizzBuzz;