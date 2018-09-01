import * as chai from "chai";

import hammingDistance from "../../../../main/typescript/online/leetcode/461_Hamming_Distance";

describe("461. Hamming Distance", function () {
    describe('should calculate the Hamming distance', function () {
        [
            {
                input: {x: 398459, y: 12083899},
                output: 13
            },
            {
                input: {x: 12083899, y: 398459},
                output: 13
            },
            {
                input: {x: 1, y: 4},
                output: 2
            },
        ].forEach(({input, output}) =>
            it(`hammingDistance(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                let actual = hammingDistance(input.x, input.y);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});