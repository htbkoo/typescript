import * as chai from "chai";

import bitwiseComplement from "../../../../main/typescript/online/leetcode/1009_Complement_of_Base_10_Integer";

describe("1009. Complement of Base 10 Integer", function () {
    describe('should return the complement of it\'s binary representation as a base-10 integer', function () {
        [
            {
                input: 5,
                output: 2
            },
            {
                input: 7,
                output: 0
            },
            {
                input: 10,
                output: 5
            },
            {
                input: 0,
                output: 1
            },
            {
                input: 1,
                output: 0
            },
            {
                input: 2,
                output: 1
            },
            {
                input: 3,
                output: 0
            },
            {
                input: 4,
                output: 3
            },
        ].forEach(({input, output}) =>
            it(`bitwiseComplement(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = bitwiseComplement(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});

