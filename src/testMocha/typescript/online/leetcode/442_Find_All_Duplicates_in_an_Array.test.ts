import * as chai from "chai";

import findDuplicates from "../../../../main/typescript/online/leetcode/442_Find_All_Duplicates_in_an_Array";

describe("442. Find All Duplicates in an Array", function () {
    describe('should find all the elements that appear twice in this array.', function () {
        [
            {input: [4,3,2,7,8,2,3,1], output: [2,3]},
            {input: [], output: []},
            {input: [1], output: []},
        ].forEach(({input, output}) =>
            it(`findDuplicates(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                let actual = findDuplicates(input);

                // then
                chai.expect(actual).to.include.members(output);
            })
        );
    });
});