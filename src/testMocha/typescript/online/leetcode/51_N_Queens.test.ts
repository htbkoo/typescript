import * as chai from "chai";

import solveNQueens from "../../../../main/typescript/online/leetcode/51_N_Queens";

describe("51. N-Queens", function () {
    describe('should return all distinct solutions to the n-queens puzzle', function () {
        [
            {
                input: 8, output: [
                    [".Q..",  // Solution 1
                        "...Q",
                        "Q...",
                        "..Q."],

                    ["..Q.",  // Solution 2
                        "Q...",
                        "...Q",
                        ".Q.."]
                ]
            },
            {
                input: 4, output: [
                    [".Q..",  // Solution 1
                        "...Q",
                        "Q...",
                        "..Q."],

                    ["..Q.",  // Solution 2
                        "Q...",
                        "...Q",
                        ".Q.."]
                ]
            },
            {
                input: 1, output: [
                    ["Q",],
                ]
            },
            {
                input: 2, output: []
            },
            {
                input: 3, output: []
            },
        ].forEach(({input, output}) =>
            it(`solveNQueens(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = solveNQueens(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});