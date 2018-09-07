import * as chai from "chai";

import nthUglyNumber from "../../../../main/typescript/online/leetcode/264_Ugly_Number_II";

describe("264. Ugly Number II", function () {
    describe('should find the n-th ugly number', function () {
        [
            {input: 10, output: 12},
            {input: 1659, output: 1843200000},
            {input: 1690, output: 2123366400},
        ].forEach(({input, output}) =>
            it(`nthUglyNumber(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = nthUglyNumber(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});