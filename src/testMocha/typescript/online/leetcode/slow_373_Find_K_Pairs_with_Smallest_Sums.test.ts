import * as chai from "chai";

import kSmallestPairs from "../../../../main/typescript/online/leetcode/slow_373_Find_K_Pairs_with_Smallest_Sums";

describe("373. Find K Pairs with Smallest Sums", function () {
    describe('should find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.)', function () {
        [
            {nums1: [1, 7, 11], nums2: [2, 4, 6], k: 3, output: [[1, 2], [1, 4], [1, 6]]},
            {nums1: [1, 7, 11], nums2: [2, 4, 6], k: 6, output: [[1, 2], [1, 4], [1, 6], [7, 2], [7, 4], [11, 2]]},
            {nums1: [1, 1, 2], nums2: [1, 2, 3], k: 2, output: [[1, 1], [1, 1]]},
            {nums1: [1, 2], nums2: [3], k: 3, output: [[1, 3], [2, 3]]},
        ].forEach(({nums1, nums2, k, output}) =>
            it(`kSmallestPairs(${JSON.stringify(nums1)}, ${JSON.stringify(nums2)}, ${k})=${JSON.stringify(output)}`, function () {
                // given
                // when
                let actual = kSmallestPairs(nums1, nums2, k);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});