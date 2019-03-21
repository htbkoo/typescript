import {plusMinusForTest} from "./PlusMinus";

describe("PlusMinus", function () {
    it("test", function () {
        // given
        // when
        const ratios = plusMinusForTest([-4, 3, -9, 0, 4, 1]);

        // then
        expect(ratios).toEqual([
            0.500000,
            0.333333,
            0.166667,
        ]);
    });
});