import * as chai from "chai";

import commonChars from "../../../../main/typescript/online/leetcode/1002_Find_Common_Characters";

describe("1002. Find Common Characters", function () {
    describe('should return a list of all characters that show up in all strings within the list (including duplicates)', function () {
        [
            {input: ["bella", "label", "roller"], output: ["e", "l", "l"]},
            {input: ["cool", "lock", "cook"], output: ["c", "o"]},
        ].forEach(({input, output}) =>
            it(`commonChars(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = commonChars(input);

                // then
                chai.expect(actual.length).to.deep.equal(output.length);
                chai.expect(actual).to.have.members(output);
            })
        );
    });
});