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
            {
                input: {
                    n: 30, primes: [2, 7, 13, 19]
                },
                expected: 224
            },
            {
                input: {
                    n: 100, primes: [2, 7, 13, 19]
                },
                expected: 5408
            },
            {
                input: {
                    n: 100, primes: [2, 7, 13, 19, 23, 29, 31, 37]
                },
                expected: 868
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