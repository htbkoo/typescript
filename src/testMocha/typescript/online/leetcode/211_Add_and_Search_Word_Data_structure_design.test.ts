import * as chai from "chai";

import WordDictionary from "../../../../main/typescript/online/leetcode/211_Add_and_Search_Word_Data_structure_design";

describe("211. Add and Search Word - Data structure design", function () {
    describe('should implement a trie with insert, search, and startsWith methods', function () {
        [
            {
                command: ["addWord", "addWord", "addWord", "search", "search", "search", "search"],
                args: [["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]],
                output: [undefined, undefined, undefined, false, true, true, true]
            },
        ].forEach((testCase) =>
            it(`WordDictionary(${JSON.stringify(testCase)}`, function () {
                // given
                const {command, args, output} = testCase;

                // when
                let workDictionary = new WordDictionary();

                // then
                output.forEach((expected, i) => {
                        let actual = workDictionary[command[i]].apply(workDictionary, args[i]);
                        if (typeof expected !== "undefined") {
                            chai.expect(actual).to.equal(expected, `wrong at position: ${i}`)
                        }
                    }
                );
            })
        );
    });
});