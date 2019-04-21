import * as chai from "chai";

import twoSum from "../../../../main/typescript/online/leetcode/167_Two_Sum_II_-_Input_array_is_sorted";

describe("167. Two Sum II - Input array is sorted", function () {
    describe('should return the indices of two numbers such that they add up to a specific target number', function () {
        [
            {
                input: {
                    numbers: [12, 13, 23, 28, 43, 44, 59, 60, 61, 68, 70, 86, 88, 92, 124, 125, 136, 168, 173, 173, 180, 199, 212, 221, 227, 230, 277, 282, 306, 314, 316, 321, 325, 328, 336, 337, 363, 365, 368, 370, 370, 371, 375, 384, 387, 394, 400, 404, 414, 422, 422, 427, 430, 435, 457, 493, 506, 527, 531, 538, 541, 546, 568, 583, 585, 587, 650, 652, 677, 691, 730, 737, 740, 751, 755, 764, 778, 783, 785, 789, 794, 803, 809, 815, 847, 858, 863, 863, 874, 887, 896, 916, 920, 926, 927, 930, 933, 957, 981, 997],
                    target: 542
                },
                output: [24, 32]
            },
            {input: {numbers: [1, 2, 2, 4, 5], target: 4}, output: [2, 3]},
            {input: {numbers: [0, 0, 0, 0, 3, 4, 10, 10, 10, 10], target: 7}, output: [5, 6]},
            {input: {numbers: [0, 0, 0, 0, 3, 4, 8, 9, 10, 10, 10, 1010, 10, 10, 10], target: 7}, output: [5, 6]},
            {input: {numbers: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 10, 10, 10, 10], target: 7}, output: [11, 12]},
            {input: {numbers: [0, 1, 3, 4], target: 3}, output: [1, 3]},
            {input: {numbers: [5, 25, 75], target: 100}, output: [2, 3]},
            {input: {numbers: [0, 1, 3, 4, 10], target: 10}, output: [1, 5]},
            {input: {numbers: [0, 1, 3, 4], target: 1}, output: [1, 2]},
            {input: {numbers: [2, 7, 11, 15], target: 9}, output: [1, 2]},
            {input: {numbers: [0, 0, 3, 4], target: 0}, output: [1, 2]},
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