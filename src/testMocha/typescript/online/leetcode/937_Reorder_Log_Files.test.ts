import * as chai from "chai";

import reorderLogFiles from "../../../../main/typescript/online/leetcode/937_Reorder_Log_Files";

describe("937. Reorder Log Files", function () {
    describe('should return the final order of the logs.', function () {
        [
            {
                input: ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"],
                output: ["g1 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"]
            },
            {
                input: ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo", "a2 act car"],
                output: ["a2 act car", "g1 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"]
            },
        ].forEach(({input, output}) =>
            it(`reorderLogFiles(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = reorderLogFiles(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});