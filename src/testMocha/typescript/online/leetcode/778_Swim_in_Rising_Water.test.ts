import * as chai from "chai";

import swimInWater from "../../../../main/typescript/online/leetcode/778_Swim_in_Rising_Water";

const extraTestCases = require("./resources/778_Swim_in_Rising_Water.json");

describe("778. Swim in Rising Water", function () {
    describe('should get the least time until you can reach the bottom right square (N-1, N-1)', function () {
        [
            {nums: [[0, 2], [1, 3]], output: 3},
            {nums: [[3, 2], [1, 0]], output: 3},
            {nums: [[0, 2], [3, 1]], output: 2},
            {
                nums: [[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 6], [11, 17, 18, 19, 7], [10, 9, 16, 20, 8]],
                output: 8
            },
            {
                nums: [[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]],
                output: 16
            },
            ...extraTestCases
        ].forEach(({nums, output}) =>
            it(`topKFrequent(${JSON.stringify(nums)})=${output}`, function () {
                // given
                // when
                let actual = swimInWater(nums);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});