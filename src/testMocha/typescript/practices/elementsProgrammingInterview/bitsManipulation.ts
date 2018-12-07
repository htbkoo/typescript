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
            }

            // when
            const actual = getRightMostOneBit(input);

            // then
            chai.expect(actual).to.equal(expected);
        })
    );
});