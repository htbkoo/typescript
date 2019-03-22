import {diagonalDifference} from "./DiagonalDifference";

describe("DiagonalDifference", function () {
    [
        {
            arr: [
                [1, 2, 3,],
                [4, 5, 6,],
                [9, 8, 9,]
            ],
            expected: 2
        },
        {
            arr: [
                [11, 2, 4,],
                [4, 5, 6,],
                [10, 8, -12,]
            ],
            expected: 15
        },
    ].forEach(({arr, expected}) =>
        it(`test for arr=${arr}`, function () {
            // given
            // when
            const diff = diagonalDifference(arr);

            // then
            expect(diff).toEqual(expected);
        })
    );
});
