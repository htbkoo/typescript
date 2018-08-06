/*

 Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters.

* */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s: string): number {
    const repeated = {};
    const uniques = s.split("").reduce((prev, c, i) => {
        if (!(c in repeated)) {
            if (c in prev) {
                delete prev[c];
                repeated[c] = true;
            } else {
                prev[c] = i;
            }
        }
        return prev;
    }, {});
    let keys = Object.keys(uniques);
    return keys.length === 0 ? -1 : keys.reduce((prev, curr) => Math.min(prev, uniques[curr]), Number.MAX_VALUE);
};

export default firstUniqChar;