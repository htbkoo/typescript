import {leftRotation} from "./LeftRotation";

describe("LeftRotation", function () {
    [
        {d: 4, a: [1, 2, 3, 4, 5], expected: [5, 1, 2, 3, 4]},
    ].forEach(({d, a, expected}) =>
        it(`test for d=${d}, a=${a.toString()}`, function () {
            // given
            // when
            const results = leftRotation(d, a);

            // then
            expect(results).toEqual(expected);
        })
    );
});
