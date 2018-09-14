import * as chai from "chai";

import findDisappearedNumbers
    from "../../../../main/typescript/online/leetcode/448_Find_All_Numbers_Disappeared_in_an_Array";

describe("448. Find All Numbers Disappeared in an Array", function () {
    describe('should find all the elements of [1, n] inclusive that do not appear in this array.', function () {
        [
            {input: [4, 3, 2, 7, 8, 2, 3, 1], output: [5, 6]},
            {input: [], output: []},
            {input: [1], output: []},
            {input: [1, 1], output: [2]},
            {input: [2, 2], output: [1]},
        ].forEach(({input, output}) =>
            it(`findDisappearedNumbers(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                let actual = findDisappearedNumbers(input);

                // then
                chai.expect(actual).to.include.members(output);
            })
        );
    });
});