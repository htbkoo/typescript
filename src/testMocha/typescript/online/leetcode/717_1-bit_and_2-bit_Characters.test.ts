import * as chai from "chai";

import isOneBitCharacter from "../../../../main/typescript/online/leetcode/717_1-bit_and_2-bit_Characters";

describe("717. 1-bit and 2-bit Characters", function () {
    describe('should find whether the last character must be a one-bit character or not', function () {
        [
            {input: [1, 1, 1, 0], output: false},
            {input: [0, 1, 0], output: false},
            {input: [1, 0, 0], output: true},
            {input: [0, 0], output: true},
            {input: [1, 0], output: false},
            {input: [0, 1, 1, 0], output: true},
            {input: [1, 1, 0, 0], output: true},
            {input: [1, 0, 0, 0], output: true},
            {input: [1, 0, 0, 1, 0], output: false},
        ].forEach(({input, output}) =>
            it(`isOneBitCharacter(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = isOneBitCharacter(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});