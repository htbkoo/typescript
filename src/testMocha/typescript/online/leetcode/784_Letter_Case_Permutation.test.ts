import * as chai from "chai";

import letterCasePermutation from "../../../../main/typescript/online/leetcode/784_Letter_Case_Permutation";

describe("784. Letter Case Permutation", function () {
    describe('should return a list of all possible strings we could create', function () {
        [
            {input: "a1b2", output: ["a1b2", "a1B2", "A1b2", "A1B2"]},
            {input: "3z4", output: ["3z4", "3Z4"]},
            {input: "12345", output: ["12345"]},
        ].forEach(({input, output}) =>
            it(`letterCasePermutation(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = letterCasePermutation(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});