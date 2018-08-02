import * as chai from "chai";

import kmpFindFirst from "../../../main/typescript/practices/knuthMorrisPrattAlgorithm";

describe("knuthMorrisPrattAlgorithm", function () {
    describe("should find the index if match ", function () {
        [
            {s: "a", sub: "a", expected: 0},
            {s: "aa", sub: "a", expected: 0},
            {s: "abc", sub: "b", expected: 1},
            {s: "abc", sub: "c", expected: 2},
            {s: "banananobano", sub: "nano", expected: 4},
            {s: "banananobano", sub: "bano", expected: 8},
            {s: "ABC ABCDAB ABCDABCDABDE", sub: "ABCDABD", expected: 8},
        ].forEach(({s, sub, expected}) =>
            it(`kmp("${s}", "${sub}")=${expected}`, function () {
                // given
                // when
                let actual = kmpFindFirst(s, sub);

                // then
                chai.expect(actual).to.equal(expected);
            })
        );
    });
});