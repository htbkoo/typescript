import {bigSorting} from "./BigSorting";

describe("BigSorting", function () {
    [
        {
            arr: [
                "31415926535897932384626433832795",
                "1",
                "3",
                "10",
                "3",
                "5",
            ],
            expected: [
                "1",
                "3",
                "3",
                "5",
                "10",
                "31415926535897932384626433832795",
            ]
        },
        {
            arr: [
                "1",
                "2",
                "100",
                "12303479849857341718340192371",
                "3084193741082937",
                "3084193741082938",
                "111",
                "200",
            ],
            expected: [
                "1",
                "2",
                "100",
                "111",
                "200",
                "3084193741082937",
                "3084193741082938",
                "12303479849857341718340192371",
            ]
        },
    ].forEach(({arr, expected}) =>
        it(`test for arr=${arr}`, function () {
            // given
            // when
            const results = bigSorting(arr);

            // then
            expect(results).toEqual(expected);
        })
    );
});
