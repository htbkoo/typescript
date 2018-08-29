import * as chai from "chai";

import KthLargest from "../../../../main/typescript/online/leetcode/703_Kth_Largest_Element_in_a_Stream";

const extraCases = require("./resources/703_Kth_Largest_Element_in_a_Stream.json");

describe("703. Kth Largest Element in a Stream", function () {
    describe('should find the kth largest element in a stream', function () {
        [
            {initializeWith: {k: 2, arr: [0]}, params: [-1, 1, -2, -4, 3], output: [-1, 0, 0, 0, 1]},
            {initializeWith: {k: 3, arr: [4, 5, 8, 2]}, params: [3, 5, 10, 9, 4], output: [4, 5, 5, 8, 8]},
            ...extraCases
        ].forEach((testCase) =>
            it(`KthLargest(${JSON.stringify(testCase)}`, function () {
                this.timeout(60000);

                // given
                const {initializeWith, params, output} = testCase;
                const {k, arr} = initializeWith;
                // when
                // @ts-ignore
                let heap = new KthLargest(k, arr);

                // then
                output.forEach((expected, i) =>
                    chai.expect(heap.add(params[i])).to.equal(expected, `wrong at position: ${i}`)
                );
            })
        );
    });
});