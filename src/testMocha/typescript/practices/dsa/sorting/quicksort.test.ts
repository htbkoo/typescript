import * as chai from "chai";
import {quickSort} from "../../../../../main/typescript/practices/dsa/sorting/quicksort";

describe("quick sort", function () {
    [
        {inputArray: [], expected: [], confirmUnmodified: []},
        {inputArray: [1], expected: [1], confirmUnmodified: [1]},
        {inputArray: [1, 2], expected: [1, 2], confirmUnmodified: [1, 2]},
        {inputArray: [2, 1], expected: [1, 2], confirmUnmodified: [2, 1]},
        {inputArray: [2, 5, 3, 4, 1], expected: [1, 2, 3, 4, 5], confirmUnmodified: [2, 5, 3, 4, 1]},
        {
            inputArray: ["b", "a"],
            expected: ["a", "b"],
            confirmUnmodified: ["b", "a"],
            compareFn: (str1, str2) => ((str1 == str2) ? 0 : ((str1 > str2) ? 1 : -1))
        },
    ].forEach(({inputArray, expected, confirmUnmodified, compareFn}) =>
        it(`should sort the generic array ${JSON.stringify(inputArray)}`, function () {
            // given
            // when
            let actual = compareFn
                ? quickSort<string | number>(inputArray, compareFn)
                : quickSort<string | number>(inputArray);

            // then
            chai.expect(actual).to.deep.equal(expected, "array should be sorted");
            chai.expect(inputArray).to.deep.equal(confirmUnmodified, "order of original array should not be changed");
        })
    );
});