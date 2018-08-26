import * as chai from "chai";

import kthSmallest from "../../../../main/typescript/online/leetcode/378_Kth_Smallest_Element_in_a_Sorted_Matrix";

describe("378. Kth Smallest Element in a Sorted Matrix", function () {
    describe('should get the kth smallest element in the matrix', function () {
        [
            {
                matrix: [
                    [1, 5, 9],
                    [10, 11, 13],
                    [12, 13, 15]
                ],
                k: 8,
                output: 13
            },
            {
                matrix: [[1, 1, 1], [1, 1, 2], [1, 1, 3]],
                k: 8,
                output: 2
            },
        ].forEach(({matrix, k, output}) =>
            it(`topKFrequent(${JSON.stringify(matrix)}, ${k})=${output}`, function () {
                // given
                // when
                let actual = kthSmallest(matrix, k);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});