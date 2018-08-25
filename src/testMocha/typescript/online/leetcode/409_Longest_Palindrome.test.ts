import * as chai from "chai";

import longestPalindrome from "../../../../main/typescript/online/leetcode/409_Longest_Palindrome";

describe("409. Longest Palindrome", function () {
    describe('should get length of the longest palindromes that can be built with those letters', function () {
        [
            {input: "abccccdd", output: 7},
            {input: "accccdd", output: 7},
            {input: "ccccdd", output: 6},
            {input: "cccdd", output: 5},
            {input: "cccd", output: 3},
            {input: "ccd", output: 3},
            {input: "cd", output: 1},
            {input: "cd", output: 1},
            {input: "", output: 0},
        ].forEach(({input, output}) =>
            it(`longestPalindrome(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = longestPalindrome(input);

                // then
                chai.expect(actual).to.equal(output);
            })
        );
    });
});