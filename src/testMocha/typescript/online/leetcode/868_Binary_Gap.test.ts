import * as chai from "chai";

import binaryGap from "../../../../main/typescript/online/leetcode/868_Binary_Gap";

describe("868. Binary Gap", function () {
    describe('should find the binaryGap', function () {
        [
            {input: 22, output: 2},
            {input: 5, output: 2},
            {input: 6, output: 1},
            {input: 8, output: 0},
            {input: 22209430, output: 4},
            {input: 67108865, output: 26},
        ].forEach(({input, output}) =>
            it(`binaryGap(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = binaryGap(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});