import * as chai from "chai";

import compress from "../../../../main/typescript/online/leetcode/443_String_Compression";

describe("443. String Compression", function () {
    describe('should String Compression', function () {
        [
            {input: ["a", "a", "b", "b", "c", "c", "c"], output: ["a", "2", "b", "2", "c", "3"]},
            {input: ["a"], output: ["a"]},
            {input: ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"], output: ["a", "b", "1", "2"]},
        ].forEach(({input, output}) =>
            it(`compress(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = compress(input);

                // then
                chai.expect(input.slice(0,actual)).to.deep.equal(output);
            })
        );
    });
});