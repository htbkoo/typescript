import * as chai from "chai";

import minimumDeleteSum from "../../../../main/typescript/online/leetcode/712_Minimum_ASCII_Delete_Sum_for_Two_Strings";

describe("712. Minimum ASCII Delete Sum for Two Strings", function () {
    describe('should return minimum ASCII delete sum for two Strings', function () {
        [
            {
                input: {s1: "leet", s2: "delete"},
                output: 403
            },
            {
                input: {s1: "ccaccjp", s2: "fwosarcwge"},
                output: 1399
            },
            {
                input: {s1: "fwosarcwge", s2: "ccaccjp"},
                output: 1399
            },
            {
                input: {s1: "sea", s2: "eat"},
                output: 231
            },
            {
                input: {s1: "delete", s2: "leet"},
                output: 403
            },
            {
                input: {s1: "sewefawefalsdaapvrndkfvlnlkadfnlkvaerioionafrnalskdflawnioe", s2: "eaascklnrgosdifskfnket"},
                output: 5222
            },
        ].forEach(({input, output}) =>
            it(`minimumDeleteSum(${JSON.stringify(input)})=${output}`, function () {
                // given
                const {s1, s2} = input;

                // when
                let actual = minimumDeleteSum(s1, s2);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});