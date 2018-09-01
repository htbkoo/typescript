/*
https://leetcode.com/problems/to-lower-case/description/

Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.



Example 1:

Input: "Hello"
Output: "hello"

Example 2:

Input: "here"
Output: "here"

Example 3:

Input: "LOVELY"
Output: "lovely"

* */

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str: string): string {
    return str.split("").map(charToLowerCase).join("");
};

const A = "A".charCodeAt(0);
const Z = "Z".charCodeAt(0);

function charToLowerCase(char: string): string {
    let charCode = char.charCodeAt(0);
    if (charCode >= A && charCode <= Z) {
        return String.fromCharCode(charCode + 32);
    } else {
        return char;
    }

}

export default toLowerCase;