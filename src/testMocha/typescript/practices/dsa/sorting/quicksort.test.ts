import * as chai from "chai";
import {quickSort} from "../../../../../main/typescript/practices/dsa/sorting/quicksort";

describe("quick sort", function () {
    [
        {inputArray: [], expected: [], confirmUnmodified: []},
    ].forEach(({inputArray, expected, confirmUnmodified}) =>
        it(`should sort the generic array ${JSON.stringify(inputArray)}`, function () {
            // given
            // when
            let actual = quickSort(inputArray);

            // then
            chai.expect(actual).to.deep.equal(expected);
            chai.expect(inputArray).to.deep.equal(confirmUnmodified);
        })
    );
});