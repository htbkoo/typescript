import * as chai from "chai";

import nextGreaterElement from "../../../../main/typescript/online/leetcode/496_Next_Greater_Element_I";

describe("496. Next Greater Element I", function () {
    describe('should find all the next greater numbers for nums1\'s elements in the corresponding places of nums2', function () {
        [
            {
                input: {nums1: [4, 1, 2], nums2: [1, 3, 4, 2]},
                output: [-1, 3, -1]
            },
            {
                input: {nums1: [2, 4], nums2: [1, 2, 3, 4]},
                output: [3, -1]
            },
        ].forEach(({input, output}) =>
            it(`nextGreaterElement(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                const {nums1, nums2} = input;

                // when
                const actual = nextGreaterElement(nums1, nums2);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});