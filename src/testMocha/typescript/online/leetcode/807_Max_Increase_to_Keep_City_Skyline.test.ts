import * as chai from "chai";

import maxIncreaseKeepingSkyline
    from "../../../../main/typescript/online/leetcode/807_Max_Increase_to_Keep_City_Skyline";

describe("807. Max Increase to Keep City Skyline", function () {
    describe('should get maximum total sum that the height of the buildings can be increased', function () {
        [
            {input: [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]], output: 35},
            {input: [[3, 0, 8], [2, 4, 5], [9, 2, 6], [0, 3, 1]], output: 21},
            {input: [[0, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]], output: 38},
            {input: [[2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]], output: 20},
            {input: [[9, 2, 6, 3], [0, 3, 1, 0]], output: 9},
            {input: [[0, 0], [0, 0]], output: 0},
            {input: [[0, 1], [0, 0]], output: 0},
        ].forEach(({input, output}) =>
            it(`maxIncreaseKeepingSkyline(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = maxIncreaseKeepingSkyline(input);

                // then
                chai.expect(actual).to.equal(output);
            })
        );
    });
});