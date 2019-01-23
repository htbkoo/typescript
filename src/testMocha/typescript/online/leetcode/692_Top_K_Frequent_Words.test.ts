import * as chai from "chai";

import topKFrequent from "../../../../main/typescript/online/leetcode/692_Top_K_Frequent_Words";

describe("692. Top K Frequent Words", function () {
    describe('should find Top K Frequent Words', function () {
        [
            {
                input: {
                    words: ["i", "love", "leetcode", "i", "love", "coding"],
                    k: 2,
                },
                expected: ["i", "love",]
            },
            {
                input: {
                    words: ["i", "love", "leetcode", "i", "love", "coding"],
                    k: 1,
                },
                expected: ["i",]
            },
            {
                input: {
                    words: ["i", "love", "leetcode", "i", "love", "coding"],
                    k: 3,
                },
                expected: ["i", "love", "coding"]
            },
            {
                input: {
                    words: ["i", "love", "leetcode", "i", "love", "coding"],
                    k: 4,
                },
                expected: ["i", "love", "coding", "leetcode"]
            },
            {
                input: {
                    words: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
                    k: 4,
                },
                expected: ["the", "is", "sunny", "day"]
            },
            {
                input: {
                    words: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
                    k: 1,
                },
                expected: ["the",]
            },
            {
                input: {
                    words: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
                    k: 2,
                },
                expected: ["the", "is",]
            },
            {
                input: {
                    words: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
                    k: 3,
                },
                expected: ["the", "is", "sunny",]
            },
        ].forEach(({input, expected}) =>
            it(`topKFrequent(${JSON.stringify(input)}`, function () {
                // given
                const {words, k} = input;

                // when
                const actual = topKFrequent(words, k);

                // then
                chai.expect(actual).to.deep.equal(expected);
            })
        );
    });
});