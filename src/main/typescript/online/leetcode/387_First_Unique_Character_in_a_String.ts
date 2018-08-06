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
var firstUniqChar_slightly_faster = function (s: string): number {
    if (s.length === 0) {
        return -1;
    }

    const mapping = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25
    };
    const length = s.length + 1, first = new Array(26).fill(length);
    let chances = 26;
    for (let i = 0; i < length; ++i) {
        const c = mapping[s.charAt(i)];
        if (first[c] !== -1) {
            if (first[c] < length) {
                first[c] = -1;
                chances--;
                if (chances <= 0) {
                    return -1;
                }
            } else {
                first[c] = i;
            }
        }
    }
    const l = first.length;
    let result = length;
    for (let i = 0; i < l; ++i) {
        if (first[i] === 0) {
            return 0;
        } else if (first[i] !== -1) {
            result = Math.min(first[i], result);
        }
    }
    return result === length ? -1 : result;
};

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