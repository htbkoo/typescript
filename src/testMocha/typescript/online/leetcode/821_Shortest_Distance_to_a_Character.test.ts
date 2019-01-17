import * as chai from "chai";

import shortestToChar from "../../../../main/typescript/online/leetcode/821_Shortest_Distance_to_a_Character";

describe("821. Shortest Distance to a Character", function () {
    describe('should returns the Shortest Distance to a Character', function () {
        [
            {input: {S: "loveleetcode", C: 'e'}, output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]},
            {input: {S: "loveleetcode", C: 'l'}, output: [0, 1, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7]},
            {input: {S: "loveleetcode", C: 'o'}, output: [1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2]},
            {input: {S: "loveleetcode", C: 'c'}, output: [8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3]},
            {input: {S: "loveleetcode", C: 't'}, output: [7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4]},
            {input: {S: "t", C: 't'}, output: [0]},
            {input: {S: "tt", C: 't'}, output: [0, 0]},
            {input: {S: "taat", C: 't'}, output: [0, 1, 1, 0]},
        ].forEach(({input, output}) =>
            it(`shortestToChar(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                const actual = shortestToChar(input.S, input.C);

                // when
                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});
