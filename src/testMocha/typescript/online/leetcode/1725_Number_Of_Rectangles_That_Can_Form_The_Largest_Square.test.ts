import * as chai from "chai";

import countGoodRectangles
  from "../../../../main/typescript/online/leetcode/1725_Number_Of_Rectangles_That_Can_Form_The_Largest_Square";

describe("1725. Number Of Rectangles That Can Form The Largest Square", function () {
  describe('should return the number of rectangles that can form the largest square', function () {
    [
      {
        input: [[5, 8], [3, 9], [5, 12], [16, 5]],
        output: 3,
      },
      {
        input: [[2,3],[3,7],[4,3],[3,7]],
        output: 3,
      },
    ].forEach(({ input, output }) =>
      it(`countGoodRectangles(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
        // given
        // when
        const actual = countGoodRectangles(input);

        // then
        chai.expect(actual).to.deep.equal(output);
      })
    );
  });
});

