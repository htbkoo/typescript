import {miniMaxSumForTest} from "./MiniMaxSum";

describe("MiniMaxSum", function () {
    [
        {
            arr: [1,2,3,4,5],
            expected: "10 14"
        },
        {
            arr: [1,3,5,7,9],
            expected: "16 24"
        },
    ].forEach(({arr, expected}) =>
        it(`test for arr=${arr}`, function () {
            // given
            // when
            const diff = miniMaxSumForTest(arr);

            // then
            expect(diff).toEqual(expected);
        })
    );
});
