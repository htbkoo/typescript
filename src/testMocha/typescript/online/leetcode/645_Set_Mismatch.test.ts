import * as chai from "chai";

import findErrorNums from "../../../../main/typescript/online/leetcode/645_Set_Mismatch";

describe("645. Set Mismatch", function () {
    describe('should return the number occurs twice and then find the number that is missing', function () {
        [
            {input: [1, 2, 2, 4], output: [2, 3]},
        ].forEach(({input, output}) =>
            it(`findErrorNums(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = findErrorNums(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});