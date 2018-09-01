import * as chai from "chai";

import toLowerCase from "../../../../main/typescript/online/leetcode/709_To_Lower_Case";

describe("709. To Lower Case", function () {
    describe('should returns the same string in lowercase', function () {
        [
            {input: "Hello", output: "hello"},
            {input: "here", output: "here"},
            {input: "LOVELY", output: "lovely"},
        ].forEach(({input, output}) =>
            it(`toLowerCase(${JSON.stringify(input)})=${output}`, function () {
                // given
                let actual = toLowerCase(input);

                // when
                // then
                chai.expect(actual).to.equal(output);
            })
        );
    });
});