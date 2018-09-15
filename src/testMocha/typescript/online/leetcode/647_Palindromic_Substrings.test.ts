import * as chai from "chai";

import countSubstrings from "../../../../main/typescript/online/leetcode/647_Palindromic_Substrings";

describe("647. Palindromic Substrings", function () {
    describe('should count how many palindromic substrings in this string.', function () {
        [
            {input: "abc", output: 3},
            {input: "aaa", output: 6},
            {input: "aaaa", output: 10},
            {input: "aaaaa", output: 15},
            {input: "abba", output: 6},
            {input: "acacaca", output: 16},
        ].forEach(({input, output}) =>
            it(`countSubstrings(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = countSubstrings(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});