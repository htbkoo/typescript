import * as chai from "chai";

import largestPerimeter from "../../../../main/typescript/online/leetcode/976_Largest_Perimeter_Triangle";

describe("976. Largest Perimeter Triangle", function () {
    describe('should return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths', function () {
        [
            {
                input: [2, 1, 2],
                output: 5
            },
            {
                input: [1, 2, 1],
                output: 0
            },
            {
                input: [3, 2, 3, 4],
                output: 10
            },
            {
                input: [3, 6, 2, 3],
                output: 8
            },
        ].forEach(({input, output}) =>
            it(`largestPerimeter(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = largestPerimeter(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});

