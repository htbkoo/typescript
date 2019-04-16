import {utopianTree} from "./UtopianTree";

describe("UtopianTree", function () {
    [
        {n: 0, expected: 1},
        {n: 1, expected: 2},
        {n: 2, expected: 3},
        {n: 3, expected: 6},
        {n: 4, expected: 7},
        {n: 5, expected: 14},
        {n: 6, expected: 15},
        {n: 7, expected: 30},
    ].forEach(({n, expected}) =>
        it(`test for n=${n}`, function () {
            // given
            // when
            const results = utopianTree(n);

            // then
            expect(results).toEqual(expected);
        })
    );
});
