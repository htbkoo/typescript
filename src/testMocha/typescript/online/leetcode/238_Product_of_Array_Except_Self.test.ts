import * as chai from "chai";

import productExceptSelf from "../../../../main/typescript/online/leetcode/238_Product_of_Array_Except_Self";

describe("238. Product of Array Except Self", function () {
    describe('should return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].', function () {
        [
            {input: [1,2,3,4], output: [24,12,8,6]},
            {input: [], output: []},
            {input: [1], output: [1]},
        ].forEach(({input, output}) =>
            it(`productExceptSelf(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                let actual = productExceptSelf(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});