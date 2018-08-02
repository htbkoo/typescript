import * as chai from "chai";
import minCostClimbingStairs from "../../../../main/typescript/online/leetcode/746_Min_Cost_Climbing_Stairs";

describe("746. Min Cost Climbing Stairs", function () {
    describe('should calculate Min Cost Climbing Stairs ', function () {
        [
            {n: [10, 15], expected: 10},
            {n: [10, 15, 20], expected: 15},
            {n: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1], expected: 6},
        ].forEach(({n, expected}) =>
            it(`minCostClimbingStairs(${JSON.stringify(n)})=${expected}`, function () {
                // given
                // when
                let actual = minCostClimbingStairs(n);

                // then
                chai.expect(actual).to.equal(expected);
            })
        );
    });
});