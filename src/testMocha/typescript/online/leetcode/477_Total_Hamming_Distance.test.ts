import * as chai from "chai";

import totalHammingDistance from "../../../../main/typescript/online/leetcode/477_Total_Hamming_Distance";

describe("477. Total Hamming Distance", function () {
    describe('should calculate the total Hamming distance', function () {
        [
            {
                input: [4, 14, 2, 1, 3, 6, 4, 2, 4, 6, 8, 2, 12, 3, 11, 343, 5, 345],
                output: 399
            },
            {
                input: [398459, 12083899],
                output: 13
            },
            {
                input: [4, 14, 2],
                output: 6
            },
        ].forEach(({input, output}) =>
            it(`totalHammingDistance6(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                let actual = totalHammingDistance(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});