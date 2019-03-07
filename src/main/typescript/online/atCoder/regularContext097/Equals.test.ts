import * as chai from "chai";
import {Equals} from "./Equals";

describe("Equals", function () {
    [
        {
            input: "5 2\n5 3 1 4 2\n1 3\n5 4",
            expected: "2"
        },
        {
            input: "3 2\n3 2 1\n1 2\n2 3",
            expected: "3"
        },
        {
            input: "10 8\n5 3 6 8 7 10 9 1 2 4\n3 1\n4 1\n5 9\n2 5\n6 5\n3 5\n8 9\n7 9",
            expected: "8"
        },
        {
            input: "5 1\n1 2 3 4 5\n1 5",
            expected: "5"
        },
    ].forEach(({input, expected}) =>
        it("tests", function () {
            // given
            // when
            const actual = Equals(input);

            // then
            chai.expect(actual).to.equal(expected);
        })
    );
});