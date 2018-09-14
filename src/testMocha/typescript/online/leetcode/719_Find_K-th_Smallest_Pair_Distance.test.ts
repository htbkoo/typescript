import * as chai from "chai";

import smallestDistancePair from "../../../../main/typescript/online/leetcode/719_Find_K-th_Smallest_Pair_Distance";

const additionalTestCases = require("./resources/719_Find_K-th_Smallest_Pair_Distance.json");

describe("719. Find K-th Smallest Pair Distance", function () {
    describe('should return the k-th smallest distance among all the pairs', function () {
        [
            {
                input: {
                    nums: [1, 3, 1],
                    k: 1
                }, output: 0
            },
            {
                input: {
                    nums: [1, 3, 1],
                    k: 2
                }, output: 2
            },
            {
                input: {
                    nums: [1, 3, 3, 1],
                    k: 1
                }, output: 0
            },
            {
                input: {
                    nums: [1, 3, 3, 1],
                    k: 2
                }, output: 0
            },
            {
                input: {
                    nums: [1, 3, 3, 1],
                    k: 3
                }, output: 2
            },
            {
                input: {
                    nums: [1, 3, 3, 1],
                    k: 4
                }, output: 2
            },
            {
                input: {
                    nums: [1, 7, 5, 6, 2, 4, 3, 3, 1],
                    k: 1
                }, output: 0
            },
            {
                input: {
                    nums: [1, 7, 5, 6, 2, 4, 3, 3, 1],
                    k: 2
                }, output: 0
            },
            {
                input: {
                    nums: [1, 7, 5, 6, 2, 4, 3, 3, 1],
                    k: 4
                }, output: 1
            },
            {
                input: {
                    nums: [1, 7, 5, 6, 2, 4, 3, 3, 1],
                    k: 30
                }, output: 4
            },
            {
                input: {
                    nums: [1, 7, 5, 6, 2, 4, 3, 3, 1],
                    k: 35
                }, output: 6
            },
            {
                input: {
                    nums: [1, 7, 5, 6, 2, 4, 3, 3, 1],
                    k: 36
                }, output: 6
            },
            ...additionalTestCases
        ].forEach(({input, output}) =>
            it(`smallestDistancePair(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = smallestDistancePair(input.nums, input.k);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});