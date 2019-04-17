import * as chai from "chai";

import nextGreaterElements from "../../../../main/typescript/online/leetcode/503_Next_Greater_Element_II";

describe("503. Next Greater Element II", function () {
    describe('should find all the next greater numbers', function () {
        [
            {
                input: [1, 2, 1],
                output: [2, -1, 2]
            },
            {
                input: [5, 7, 4, 3, 2, 1, 6],
                output: [7, -1, 6, 6, 6, 6, 7]
            },
            {
                input: [5, 7, 8, 4, 3, 2, 1, 6],
                output: [7, 8, -1, 6, 6, 6, 6, 7]
            },
        ].forEach(({input, output}) =>
            it(`nextGreaterElements(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = nextGreaterElements(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});