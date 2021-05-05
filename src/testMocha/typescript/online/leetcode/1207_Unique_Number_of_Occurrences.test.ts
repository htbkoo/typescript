import * as chai from "chai";

import uniqueOccurrences from "../../../../main/typescript/online/leetcode/1207_Unique_Number_of_Occurrences";

describe("1207. Unique Number of Occurrences", function () {
    describe('should returns true if and only if the number of occurrences of each value in the array is unique', function () {
        [
            {
                input: [1, 2, 2, 1, 1, 3],
                output: true
            },
            {
                input: [1, 2],
                output: false
            },
            {
                input: [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0],
                output: true
            },
        ].forEach(({input, output}) =>
            it(`uniqueOccurrences(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = uniqueOccurrences(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});

