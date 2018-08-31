import * as chai from "chai";

import replaceWords from "../../../../main/typescript/online/leetcode/648_Replace_Words";

describe("648. Replace Words", function () {
    describe('should replace words', function () {
        [
            {
                dict: ["cat", "bat", "rat"],
                sentence: "the cattle was rattled by the battery",
                output: "the cat was rat by the bat"
            },
        ].forEach(({dict, sentence, output}) =>
            it(`replaceWords(${JSON.stringify(dict)}, ${sentence})=${output}`, function () {
                // given
                // when
                let actual = replaceWords(dict, sentence);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});