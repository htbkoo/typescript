import * as chai from "chai";

import frequencySort from "../../../../main/typescript/online/leetcode/451_Sort_Characters_By_Frequency";

describe("451. Sort Characters By Frequency", function () {
    describe('should sort characters by frequency', function () {
        [
            {input: "tree", output: ["eert", "eetr"]},
            {input: "cccaaa", output: ["cccaaa", "aaaaccc"]},
            {input: "Aabb", output: ["bbaA", "bbAa"]},
        ].forEach(({input, output}) =>
            it(`frequencySort(${JSON.stringify(input)}) to be included in [${output}]`, function () {
                // given
                // when
                let actual = frequencySort(input);

                // then
                chai.expect(output).to.include(actual);
            })
        );
    });
});