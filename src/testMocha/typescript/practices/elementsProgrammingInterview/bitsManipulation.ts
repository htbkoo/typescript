import * as chai from "chai";

describe("bits manipulation", function () {
    [
        {input: 0, expected: 0},
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