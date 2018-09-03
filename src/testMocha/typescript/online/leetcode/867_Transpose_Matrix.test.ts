import * as chai from "chai";

import transpose from "../../../../main/typescript/online/leetcode/867_Transpose_Matrix";

describe("867. Transpose Matrix", function () {
    describe('should return the transpose', function () {
        [
            {
                input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
                output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
            },
            {
                input: [[1, 2, 3], [4, 5, 6]],
                output: [[1, 4], [2, 5], [3, 6]]
            }
        ].forEach(({input, output}) =>
            it(`transpose(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = transpose(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});