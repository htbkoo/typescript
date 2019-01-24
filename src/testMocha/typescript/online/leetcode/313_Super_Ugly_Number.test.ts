import * as chai from "chai";

import nthSuperUglyNumber from "../../../../main/typescript/online/leetcode/313_Super_Ugly_Number";

describe("313. Super Ugly Number", function () {
    describe('should find nth Super Ugly Number', function () {
        [
            {
                input: {
                    n: 12, primes: [2, 7, 13, 19]
                },
                expected: 32
            },
        ].forEach(({input, expected}) =>
            it(`nthSuperUglyNumber(${JSON.stringify(input)}`, function () {
                // given
                const {n, primes} = input;

                // when
                const actual = nthSuperUglyNumber(n, primes);

                // then
                chai.expect(actual).to.deep.equal(expected);
            })
        );
    });
});