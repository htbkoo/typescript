import * as chai from "chai";

import uncommonFromSentences from "../../../../main/typescript/online/leetcode/884_Uncommon_Words_from_Two_Sentences";

describe("884. Uncommon Words from Two Sentences", function () {
    describe('should a list of all uncommon words', function () {
        [
            {
                input: {A: "this apple is sweet", B: "this apple is sour"},
                output: ["sweet", "sour"],
            },
            {
                input: {A: "apple apple", B: "banana"},
                output: ["banana"]
            },
        ].forEach(({input, output}) =>
            it(`uncommonFromSentences(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                const {A, B} = input;

                // when
                const actual = uncommonFromSentences(A, B);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});

