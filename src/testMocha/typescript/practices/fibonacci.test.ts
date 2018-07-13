import * as chai from "chai";

// import fibonacci from "practices/fibonacci";
import fibonacci from "../../../main/typescript/practices/fibonacci";

describe("fibonacci", function () {
    [
        {n: 0, expected: 0},
        {n: 1, expected: 1},
        {n: 2, expected: 1},
        {n: 3, expected: 2},
        {n: 4, expected: 3},
        {n: 5, expected: 5},
        {n: 6, expected: 8},
        {n: 7, expected: 13},
        {n: 8, expected: 21},
    ].forEach(({n, expected}) =>
        it(`should calculate fibonacci number F(${n})=${expected}`, function () {
            // given
            // when
            let actual = fibonacci(n);

            // then
            chai.expect(actual).to.equal(expected);
        })
    );
});