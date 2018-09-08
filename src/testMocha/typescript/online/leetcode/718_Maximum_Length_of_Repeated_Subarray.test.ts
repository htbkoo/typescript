import * as chai from "chai";

import findLength from "../../../../main/typescript/online/leetcode/718_Maximum_Length_of_Repeated_Subarray";

describe("718. Maximum Length of Repeated Subarray", function () {
    describe('should find the maximum length of an subarray that appears in both arrays', function () {
        [
            {
                input: {
                    A: [1, 2, 3, 2, 1],
                    B: [3, 2, 1, 4, 7]
                }, output: 3
            },
            {
                input: {
                    A: [1, 2, 1, 4, 7, 3, 2, 1],
                    B: [3, 2, 1, 4, 7]
                }, output: 4
            },
            {
                input: {
                    A: [2, 1, 4, 7, 3, 2, 1, 4, 7, 3, 2, 1],
                    B: [3, 2, 1, 4, 7]
                }, output: 5
            },
        ].forEach(({input, output}) =>
            it(`findLength(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = findLength(input.A, input.B);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});