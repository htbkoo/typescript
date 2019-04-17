import * as chai from "chai";

import findWords from "../../../../main/typescript/online/leetcode/500_Keyboard_Row";

describe("500. Keyboard Row", function () {
    describe('should return the words that can be typed using letters of alphabet on only one row\'s of American keyboard like the image below', function () {
        [
            {
                input: ["Hello", "Alaska", "Dad", "Peace"],
                output: ["Alaska", "Dad"]
            },
        ].forEach(({input, output}) =>
            it(`findWords(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = findWords(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});