import * as chai from "chai";

import longestPalindrome from "../../../../main/typescript/online/leetcode/5_Longest_Palindromic_Substring";

describe("5. Longest Palindromic Substring", function () {
    describe('should find the longest palindromic substring in s.', function () {
        [
            {input: "babad", output: "bab"},
            {input: "cbbd", output: "bb"},
            {input: "ababababababacccccccca", output: "ababababababa"},
            {input: "ababababacccccccca", output: "acccccccca"},
        ].forEach(({input, output}) =>
            it(`longestPalindrome(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = longestPalindrome(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});