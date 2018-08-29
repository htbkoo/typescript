import * as chai from "chai";

import Trie from "../../../../main/typescript/online/leetcode/208_Implement_Trie_Prefix_Tree";

describe("208. Implement Trie (Prefix Tree)", function () {
    describe('should implement a trie with insert, search, and startsWith methods', function () {
        [

            {
                command: ["insert", "search", "search", "startsWith", "insert", "search"],
                args: [["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]],
                output: [undefined, true, false, true, undefined, true]
            },
        ].forEach((testCase) =>
            it(`trie(${JSON.stringify(testCase)}`, function () {
                // given
                const {command, args, output} = testCase;

                // when
                let trie = new Trie();

                // then
                output.forEach((expected, i) => {
                        let actual = trie[command[i]].apply(trie, args[i]);
                        if (typeof expected !== "undefined") {
                            chai.expect(actual).to.equal(expected, `wrong at position: ${i}`)
                        }
                    }
                );
            })
        );
    });
});