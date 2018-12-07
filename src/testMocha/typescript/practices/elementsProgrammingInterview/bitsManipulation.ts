import * as chai from "chai";

describe("bits manipulation", function () {
    [
        {input: 0, expected: 0},
        {input: 1, expected: 1},
        {input: 2, expected: 2},
        {input: 3, expected: 1},
        {input: 4, expected: 4},
        {input: 5, expected: 1},
        {input: 6, expected: 2},
        {input: 7, expected: 1},
        {input: 8, expected: 8},
        {input: 15, expected: 1},
        {input: 16, expected: 16},
        {input: 100, expected: 4},
    ].forEach(({input, expected}) =>
        it("should get the rightmost bit that is set to 1", function () {
            // given
            function getRightMostOneBit(num: number): number {
                return num & ~(num - 1);
                // return num & -num; // same
            }

            // when
            const actual = getRightMostOneBit(input);

            // then
            chai.expect(actual).to.equal(expected);
        })
    );

    // 		a. Right propagate the rightmost set bit in x, e.g., turns (01010000)2 to (01011111)2
    [
        {input: 0b01010000, expected: 0b01011111},
        {input: 0b00000000, expected: 0b00000000},
        {input: 0b00000001, expected: 0b00000001},
        {input: 0b00000010, expected: 0b00000011},
        {input: 0b00000011, expected: 0b00000011},
        {input: 0b00000100, expected: 0b00000111},
        {input: 0b10000000, expected: 0b11111111},
        {input: 0b01010100, expected: 0b01010111},
    ].forEach(({input, expected}) =>
        it("should right propagate the rightmost set bit", function () {
            // given
            function rightPropagateRightmostSetBit(num: number): number {
                if (num === 0) {
                    return 0
                } else {
                    return num | ((num & ~(num - 1)) - 1);
                }
            }

            // when
            const actual = rightPropagateRightmostSetBit(input);

            // then
            chai.expect(actual).to.equal(expected);
        })
    );

    // 		b. Compute x modulo a power of two, e.g., returns 13 for 77 mod 64.
    // 		c. Test if x is a power of 2, i.e., evaluates to true for x = 1, 2, 4, 8, ... , false for all
    // 		other values.
});