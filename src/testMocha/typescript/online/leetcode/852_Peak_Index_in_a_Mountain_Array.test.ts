import * as chai from "chai";

import peakIndexInMountainArray from "../../../../main/typescript/online/leetcode/852_Peak_Index_in_a_Mountain_Array";

describe("852. Peak Index in a Mountain Array", function () {
    describe('should return i ', function () {
        [
            {
                input: [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
                output: 6
            },
            {
                input: [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2],
                output: 6
            },
            {
                input: [0, 0, 0, 0, 0, 1, 2, 1, 0],
                output: 6
            },
            {
                input: [0, 1, 0],
                output: 1
            },
            {
                input: [0, 2, 1, 0],
                output: 1
            },
        ].forEach(({input, output}) =>
            it(`peakIndexInMountainArray(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                let actual = peakIndexInMountainArray(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});