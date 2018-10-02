/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

Your are given an array of integers prices, for which the i-th element is the price of a given stock on day i; and a non-negative integer fee representing a transaction fee.

You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction. You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)

Return the maximum profit you can make.

Example 1:

Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
Buying at prices[0] = 1
Selling at prices[3] = 8
Buying at prices[4] = 4
Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.

Note:
0 < prices.length <= 50000.
0 < prices[i] < 50000.
0 <= fee < 50000.

* */

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices: number[], fee: number): number {
    const numDays = prices.length;

    // topdown
    type state = {
        day: number,
        totalProfit: number,
        cost: number,
        hasStock: boolean
    }

    const statesToCheck: state[] = [];
    statesToCheck.push({day: 0, totalProfit: 0, cost: 0, hasStock: false});

    let maxProfit = 0;

    while (statesToCheck.length > 0) {
        const {day, totalProfit, cost, hasStock} = statesToCheck.pop();
        maxProfit = Math.max(totalProfit, maxProfit);
        if (day < numDays-1) {
            if (hasStock) {
                // sell
                statesToCheck.push(sellStock());
                // not sell
                statesToCheck.push(keepStock());
            } else {
                // buy
                statesToCheck.push(buyStock());
                // not buy
                statesToCheck.push(noStock());
            }
        } else {
            if (hasStock) {
                maxProfit = Math.max(maxProfit, totalProfitAfterSelling());
            }
        }

        function sellStock(): state {
            return {day: day + 1, totalProfit: totalProfitAfterSelling(), cost: 0, hasStock: false};
        }

        function keepStock(): state {
            return {day: day + 1, totalProfit, cost, hasStock: true};
        }

        function buyStock(): state {
            return {day: day + 1, totalProfit, cost: prices[day] + fee, hasStock: true};
        }

        function noStock(): state {
            return {day: day + 1, totalProfit, cost: 0, hasStock: false};
        }

        function totalProfitAfterSelling(): number {
            return totalProfit + prices[day] - cost
        }
    }

    return maxProfit;
};

export default maxProfit;