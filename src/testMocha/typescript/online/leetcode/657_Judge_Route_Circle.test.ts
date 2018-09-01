import * as chai from "chai";

import judgeCircle from "../../../../main/typescript/online/leetcode/657_Judge_Route_Circle";

describe("657. Judge Route Circle", function () {
    describe('should judge if this robot makes a circle', function () {
        [
            {
                input: "UD",
                output: true
            },
            {
                input: "LL",
                output: false
            },
        ].forEach(({input, output}) =>
            it(`judgeCircle(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                let actual = judgeCircle(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});