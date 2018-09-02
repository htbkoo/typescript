import * as chai from "chai";

import MapSum from "../../../../main/typescript/online/leetcode/677_Map_Sum_Pairs";

describe("677. Map Sum Pairs", function () {
    describe('should return the sum of all the pairs\' value whose key starts with the prefix', function () {
        [
            {
                command: ["insert", "sum", "insert", "sum"],
                args: [["aa", 3], ["a"], ["aa", 2], ["a"]],
                output: [null, 3, null, 2]
            },
            {
                command: ["insert", "sum", "sum", "sum", "sum", "sum", "sum", "sum", "insert", "sum", "sum", "sum", "sum", "sum", "sum"],
                args: [["apple", 3], ["ap"], ["a"], ["ap"], ["app"], ["appl"], ["apple"], ["b"], ["app", 2], ["a"], ["ap"], ["app"], ["appl"], ["apple"], ["b"]],
                output: [null, 3, 3, 3, 3, 3, 3, 0, null, 5, 5, 5, 3, 3, 0]
            },
            {
                command: ["insert", "sum", "insert", "sum"],
                args: [["apple", 3], ["ap"], ["app", 2], ["ap"]],
                output: [null, 3, null, 5]
            },
        ].forEach((testCase) =>
            it(`trie(${JSON.stringify(testCase)}`, function () {
                // given
                const {command, args, output} = testCase;

                // when
                let mapSum = new MapSum();

                // then
                output.forEach((expected, i) => {
                        let actual = mapSum[command[i]].apply(mapSum, args[i]);
                        if (expected !== null) {
                            chai.expect(actual).to.equal(expected, `wrong at position: ${i}`)
                        }
                    }
                );
            })
        );
    });
});