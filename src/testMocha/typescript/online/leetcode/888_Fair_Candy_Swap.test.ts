import * as chai from "chai";

import fairCandySwap from "../../../../main/typescript/online/leetcode/888_Fair_Candy_Swap";

describe("888. Fair Candy Swap", function () {
    describe('should return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.', function () {
        [
            {input: {A: [1, 1], B: [2, 2]}, output: [1, 2]},
            {input: {A: [1, 2], B: [2, 3]}, output: [1, 2]},
            {input: {A: [2], B: [1, 3]}, output: [2, 3]},
            {input: {A: [1, 2, 5], B: [2, 4]}, output: [5, 4]},
            {input: {A: [1, 5, 2], B: [4, 2]}, output: [5, 4]},
        ].forEach(({input, output}) =>
            it(`fairCandySwap(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                const {A, B} = input;
                // when
                const actual = fairCandySwap(A, B);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});