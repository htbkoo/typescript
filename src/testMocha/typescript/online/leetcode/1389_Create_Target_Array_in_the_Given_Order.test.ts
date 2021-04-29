import * as chai from "chai";

import createTargetArray from "../../../../main/typescript/online/leetcode/1389_Create_Target_Array_in_the_Given_Order";


describe("1389. Create Target Array in the Given Order", function () {
    describe('should create the target array', function () {
        [
            {
                input: {nums: [0,1,2,3,4], index: [0,1,2,2,1]},
                output: [0,4,1,3,2],
            },
            {
                input: {nums: [1,2,3,4,0], index: [0,1,2,3,0]},
                output: [0,1,2,3,4],
            },
            {
                input: {nums: [1], index: [0]},
                output: [1],
            },
        ].forEach(({input, output}) =>
            it(`createTargetArray(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = createTargetArray(input.nums, input.index);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});

