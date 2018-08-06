import * as chai from "chai";

import frequencySort from "../../../../main/typescript/online/leetcode/451_Sort_Characters_By_Frequency";
import simplifyPath from "../../../../main/typescript/online/leetcode/71_Simplify_Path";

describe("71. Simplify Path", function () {
    describe('should simplify path', function () {
        [
            {input: "/home/", output: "/home"},
            {input: "/home///", output: "/home"},
            {input: "/a/./b/../../c/", output: "/c"},
            {input: "/../", output: "/"},
            {input: "/", output: "/"},
            {input: "//", output: "/"},
            {input: "/../../", output: "/"},
            {input: "/home//foo/", output: "/home/foo"},
            {input: "//////////////////../.../.././.../a/./b/../../c////////.///...//..///c", output: "/.../c/c"},
        ].forEach(({input, output}) =>
            it(`simplifyPath(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = simplifyPath(input);

                // then
                chai.expect(actual).to.equal(output);
            })
        );
    });
});