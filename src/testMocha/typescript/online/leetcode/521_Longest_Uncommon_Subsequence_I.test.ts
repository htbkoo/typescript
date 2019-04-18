import * as chai from "chai";

import findLUSlength from "../../../../main/typescript/online/leetcode/521_Longest_Uncommon_Subsequence_I";

describe("521. Longest Uncommon Subsequence I", function () {
    describe('should return the longest uncommon subsequence of this group of two strings', function () {
        [
            {
                input: {a: "aba", b: "cdc"},
                output: 3
            },
            {
                input: {a: "aaa", b: "aaa"},
                output: -1
            },
        ].forEach(({input, output}) =>
            it(`findLUSlength(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                const {a, b} = input;

                // when
                const actual = findLUSlength(a, b);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});