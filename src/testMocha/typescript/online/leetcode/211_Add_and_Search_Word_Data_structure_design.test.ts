import * as chai from "chai";

import WordDictionary from "../../../../main/typescript/online/leetcode/211_Add_and_Search_Word_Data_structure_design";

describe("211. Add and Search Word - Data structure design", function () {
    describe('should implement WordDictionary with addWord and search methods', function () {
        [
            {
                command: ["addWord", "addWord", "addWord", "addWord", "search", "search", "addWord", "search", "search", "search", "search", "search", "search"],
                args: [["at"], ["and"], ["an"], ["add"], ["a"], [".at"], ["bat"], [".at"], ["an."], ["a.d."], ["b."], ["a.d"], ["."]],
                output: [null, null, null, null, false, false, null, true, true, false, false, true, false]
            },
            {
                command: ["addWord", "addWord", "addWord", "search", "search", "search", "search", "search", "search"],
                args: [["bad"], ["dad"], ["mad"], ["pad"], ["badd"], ["bad."], ["bad"], [".ad"], ["b.."]],
                output: [null, null, null, false, false, false, true, true, true]
            },
            {
                command: ["addWord", "addWord", "addWord", "search", "search", "search", "search"],
                args: [["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]],
                output: [null, null, null, false, true, true, true]
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
                        if (expected !== null) {
                            chai.expect(actual).to.equal(expected, `wrong at position: ${i}`)
                        }
                    }
                );
            })
        );
    });
});