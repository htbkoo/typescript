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
                    words: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
                    k: 4,
                },
                expected: ["the", "is", "sunny", "day"]
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