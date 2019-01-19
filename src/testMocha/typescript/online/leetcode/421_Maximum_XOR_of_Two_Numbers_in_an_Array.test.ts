import * as chai from "chai";

import findMaximumXOR from "../../../../main/typescript/online/leetcode/421_Maximum_XOR_of_Two_Numbers_in_an_Array";

describe("421. Maximum XOR of Two Numbers in an Array", function () {
    describe('should find the maximum result of ai XOR aj', function () {
        [
            {
                input: [3, 10, 5, 25, 2, 8],
                output: 28
            },
            {
                input: [3, 10, 5, 25, 2, 8, 2, 4, 44, 534, 23, 21, 1],
                output: 570
            },
            {
                input: [3, 10, 5, 25, 2, 8, 2, 4, 44, 534, 23, 21, 1, 2, 2349, 4332, 4523, 343, 144020],
                output: 146361
            },
        ].forEach(({input, output}) =>
            it(`findMaximumXOR(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = findMaximumXOR(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});