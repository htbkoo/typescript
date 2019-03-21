import {staircaseForTest} from "./Staircase";

describe("Staircase", function () {
    [
        {
            n: 1, expected: [
                "#",
            ]
        },
        {
            n: 5, expected: [
                "    #",
                "   ##",
                "  ###",
                " ####",
                "#####",
            ]
        },
        {
            n: 6, expected: [
                "     #",
                "    ##",
                "   ###",
                "  ####",
                " #####",
                "######",
            ]
        }
    ].forEach(({n, expected}) =>
        it(`test for n=${n}`, function () {
            // given
            // when
            const stairs = staircaseForTest(n);

            // then
            expect(stairs).toEqual(expected);
        })
    );
});
