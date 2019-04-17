import * as chai from "chai";

import totalNQueens from "../../../../main/typescript/online/leetcode/52_N_Queens_II";

describe("52. N-Queens II", function () {
    describe('should return the number of distinct solutions to the n-queens puzzle', function () {
        [
            {input: 8, output: 92},
            {input: 4, output: 2},
            {input: 1, output: 1},
            {input: 2, output: 0},
            {input: 3, output: 0},
        ].forEach(({input, output}) =>
            it(`totalNQueens(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = totalNQueens(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});