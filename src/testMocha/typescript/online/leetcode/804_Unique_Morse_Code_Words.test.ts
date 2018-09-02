import * as chai from "chai";

import uniqueMorseRepresentations from "../../../../main/typescript/online/leetcode/804_Unique_Morse_Code_Words";

describe("804. Unique Morse Code Words", function () {
    describe('should return the number of different transformations among all words we have', function () {
        [
            {input: ["gin", "zen", "gig", "msg"], output: 2},
        ].forEach(({input, output}) =>
            it(`uniqueMorseRepresentations(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = uniqueMorseRepresentations(input);

                // then
                chai.expect(actual).to.equal(output);
            })
        );
    });
});