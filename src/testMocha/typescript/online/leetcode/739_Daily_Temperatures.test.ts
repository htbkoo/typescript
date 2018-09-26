import * as chai from "chai";

import dailyTemperatures from "../../../../main/typescript/online/leetcode/739_Daily_Temperatures";

describe("739. Daily Temperatures", function () {
    describe('should how many days you would have to wait until a warmer temperature', function () {
        [
            {input: [73, 74, 75, 71, 69, 72, 76, 73], output: [1, 1, 4, 2, 1, 1, 0, 0]},
            {input: [33, 32, 31, 30, 31, 32, 33], output: [0, 5, 3, 1, 1, 1, 0]},
            {input: [76, 75, 74, 73, 72, 71, 70], output: [0, 0, 0, 0, 0, 0, 0]},
            {input: [30, 30], output: [0, 0]},
            {
                input: [73, 74, 75, 71, 69, 72, 76, 73, 72, 71, 70, 69, 68],
                output: [1, 1, 4, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                input: [73, 74, 75, 71, 69, 72, 76, 73, 72, 71, 70, 69, 68, 100],
                output: [1, 1, 4, 2, 1, 1, 7, 6, 5, 4, 3, 2, 1, 0]
            },
        ].forEach(({input, output}) =>
            it(`dailyTemperatures(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                let actual = dailyTemperatures(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});