import * as chai from "chai";

import twoSum from "../../../../main/typescript/online/leetcode/167_Two_Sum_II_-_Input_array_is_sorted";

describe("653. Two Sum IV - Input is a BST", function () {
    describe('should return true if there exist two elements in the BST such that their sum is equal to the given target', function () {
        [
            {input: {numbers: [0, 0, 3, 4], target: 0}, output: [1, 2]},
            {input: {numbers: [1, 2, 2, 4, 5], target: 4}, output: [2, 3]},
            {input: {numbers: [0, 0, 0, 0, 3, 4, 10, 10, 10, 10], target: 7}, output: [5, 6]},
            {input: {numbers: [0, 1, 3, 4], target: 3}, output: [1, 3]},
            {input: {numbers: [5, 25, 75], target: 100}, output: [2, 3]},
            {input: {numbers: [0, 1, 3, 4, 10], target: 10}, output: [1, 5]},
            {input: {numbers: [0, 1, 3, 4], target: 1}, output: [1, 2]},
            {input: {numbers: [2, 7, 11, 15], target: 9}, output: [1, 2]},
        ].forEach(({input, output}) =>
            it(`twoSum(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                const {numbers, target} = input;
                // when
                const actual = twoSum(numbers, target);
                
                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});