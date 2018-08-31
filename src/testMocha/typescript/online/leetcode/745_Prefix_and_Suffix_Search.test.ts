import * as chai from "chai";

import WordFilter from "../../../../main/typescript/online/leetcode/745_Prefix_and_Suffix_Search";

describe("745. Prefix and Suffix Search", function () {
    describe('should return the word with given prefix and suffix with maximum weight', function () {
        [
            {
                words: ["pop"],
                prefixAndSuffix: [["", ""], ["", "p"], ["", "op"], ["", "pop"], ["p", ""], ["p", "p"], ["p", "op"], ["p", "pop"], ["po", ""], ["po", "p"], ["po", "op"], ["po", "pop"], ["pop", ""], ["pop", "p"], ["pop", "op"], ["pop", "pop"], ["", ""], ["", "p"], ["", "gp"], ["", "pgp"], ["p", ""], ["p", "p"], ["p", "gp"], ["p", "pgp"], ["pg", ""], ["pg", "p"], ["pg", "gp"], ["pg", "pgp"], ["pgp", ""], ["pgp", "p"], ["pgp", "gp"], ["pgp", "pgp"]],
                output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
            },
            {
                words: ["apple"],
                prefixAndSuffix: [["a", "e"], ["b", ""]],
                output: [0, -1]
            },
            {
                words: ["apple", "alice"],
                prefixAndSuffix: [["a", "e"], ["b", ""]],
                output: [1, -1]
            },
            {
                words: ["apple", "alice", "apple"],
                prefixAndSuffix: [["a", "e"], ["b", ""]],
                output: [2, -1]
            },
            {
                words: ["apple", "alice", "apple", "bad", "alice"],
                prefixAndSuffix: [["a", "e"], ["b", ""]],
                output: [4, 3]
            },
            {
                words: ["apple", "alice", "apple", "bad", "alice", "bed", "dog"],
                prefixAndSuffix: [["a", "e"], ["b", ""]],
                output: [4, 5]
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