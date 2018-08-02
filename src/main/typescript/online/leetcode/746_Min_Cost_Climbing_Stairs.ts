/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost: number[]): number {
    if (cost.length < 2) {
        throw new Error("length of cost should be >=2");
    } else if (cost.length === 2) {
        if (cost[0] <= cost[1]) {
            return cost[0];
        } else {
            return cost[1];
        }
    } else {
        let costsToReach: number[] = [cost[0], cost[1]];
        cost.slice(2).forEach((c, i) => {
            costsToReach.push(c + Math.min(costsToReach[i], costsToReach[i + 1]));
        });

        return Math.min(costsToReach[cost.length - 1], costsToReach[cost.length - 2]);
    }
};

export default minCostClimbingStairs;