import * as chai from "chai";

import topKFrequent from "../../../../main/typescript/online/leetcode/347_Top_K_Frequent_Elements";

describe("347. Top K Frequent Elements", function () {
    describe('should get the k most frequent elements', function () {
        [
            {nums: [1, 1, 1, 2, 2, 3], k: 2, output: [1, 2]},
            {nums: [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3], k: 2, output: [3, 1]},
            {nums: [1, 2, 3, 4, 4, 4, 4, 1, 1, 2, 3, 4, 1, 3, 12, 1, 23, 2, 312, 3, 2], k: 2, output: [1, 4]},
            {nums: [1], k: 1, output: [1]},
        ].forEach(({nums, k, output}) =>
            it(`topKFrequent(${JSON.stringify(nums)}, ${k})=${output}`, function () {
                // given
                // when
                let actual = topKFrequent(nums, k);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});