import * as chai from "chai";

import WordFilter from "../../../../main/typescript/online/leetcode/745_Prefix_and_Suffix_Search";

describe("745. Prefix and Suffix Search", function () {
    describe('should return the word with given prefix and suffix with maximum weight', function () {
        [
            {
                words: ["apple"],
                prefixAndSuffix: [["a", "e"], ["b", ""]],
                output: [0, -1]
            },
        ].forEach(({words, prefixAndSuffix, output}) =>
            it(`replaceWords(${JSON.stringify(words)}, ${JSON.stringify(prefixAndSuffix)})=${output}`, function () {
                // given
                let wordFilter = new WordFilter(words);

                // when
                // then
                output.forEach((expectedWeight, i) =>
                    chai.expect(wordFilter.f.apply(wordFilter, prefixAndSuffix[i])).to.equal(expectedWeight)
                )
            })
        );
    });
});