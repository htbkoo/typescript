import * as chai from "chai";

import firstUniqChar from "../../../../main/typescript/online/leetcode/387_First_Unique_Character_in_a_String";

describe("387. First Unique Character in a String", function () {
    describe('should find First Unique Character in a String', function () {
            [
                {s: "leetcode", expected: 0},
                {s: "loveleetcode", expected: 2},
                {s: "aabb", expected: -1},
                {s: "", expected: -1},
                {s: "cdabcaabb", expected: 1},
            ].forEach(({s, expected}) =>
                it(`firstUniqChar(${s})=${expected}`, function () {
                    // given
                    // when
                    let actual = firstUniqChar(s);

                    // then
                    chai.expect(actual).to.equal(expected);
                })
            );
        }
    );
});