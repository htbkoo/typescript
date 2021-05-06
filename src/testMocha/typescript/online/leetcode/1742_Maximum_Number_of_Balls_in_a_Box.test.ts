import * as chai from "chai";

import countGoodRectangles
    from "../../../../main/typescript/online/leetcode/1725_Number_Of_Rectangles_That_Can_Form_The_Largest_Square";
import countBalls from "../../../../main/typescript/online/leetcode/1742_Maximum_Number_of_Balls_in_a_Box";

describe("1742. Maximum Number of Balls in a Box", function () {
    describe('should return the number of balls in the box with the most balls', function () {
        [
            {
                input: {lowLimit: 1, highLimit: 10},
                output: 2,
            },
            {
                input: {lowLimit: 5, highLimit: 15},
                output: 2,
            },
            {
                input: {lowLimit: 19, highLimit: 28},
                output: 2,
            },
        ].forEach(({input, output}) =>
            it(`countBalls(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = countBalls(input.lowLimit, input.highLimit);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});

