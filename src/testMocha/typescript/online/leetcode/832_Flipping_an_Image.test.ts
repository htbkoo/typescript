import * as chai from "chai";

import flipAndInvertImage from "../../../../main/typescript/online/leetcode/832_Flipping_an_Image";

describe("832. Flipping an Image", function () {
    describe('should return the word with given prefix and suffix with maximum weight', function () {
        [
            {
                input: [[1, 1, 0], [1, 0, 1], [0, 0, 0]],
                output: [[1, 0, 0], [0, 1, 0], [1, 1, 1]]
            },
        ].forEach(({input, output}) =>
            it(`flipAndInvertImage(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                let actual = flipAndInvertImage(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});