import * as chai from "chai";

import maxProfit
    from "../../../../main/typescript/online/leetcode/714_Best_Time_to_Buy_and_Sell_Stock_with_Transaction_Fee";

describe("714. Best Time to Buy and Sell Stock with Transaction Fee", function () {
    describe('should return the maximum profit', function () {
        [
            {
                input: {
                    prices: [1, 4, 3, 5],
                    fee: 0
                },
                output: 5
            },
            {
                input: {
                    prices: [1, 4, 3, 5],
                    fee: 1
                },
                output: 3
            },
            {
                input: {
                    prices: [1, 4, 3, 4],
                    fee: 1
                },
                output: 2
            },
            {
                input: {
                    prices: [1, 4, 3, 4],
                    fee: 0
                },
                output: 4
            },
            {
                input: {
                    prices: [1, 2, 3, 4],
                    fee: 0
                },
                output: 3
            },
            {
                input: {
                    prices: [1, 2, 3],
                    fee: 0
                },
                output: 2
            },
            {
                input: {
                    prices: [1, 3, 2, 8, 4, 9],
                    fee: 9
                },
                output: 0
            },
            {
                input: {
                    prices: [1, 3, 2, 8, 4, 9],
                    fee: 8
                },
                output: 0
            },
            {
                input: {
                    prices: [1, 3, 2, 8, 4, 9],
                    fee: 7
                },
                output: 1
            },
            {
                input: {
                    prices: [1, 3, 2, 8, 4, 9],
                    fee: 6
                },
                output: 2
            },
            {
                input: {
                    prices: [1, 3, 2, 8, 4, 9],
                    fee: 5
                },
                output: 3
            },
            {
                input: {
                    prices: [1, 3, 2, 8, 4, 9],
                    fee: 4
                },
                output: 4
            },
            {
                input: {
                    prices: [1, 3, 2, 8, 4, 9],
                    fee: 3
                },
                output: 6
            },
            {
                input: {
                    prices: [1, 3, 2, 8, 4, 9],
                    fee: 2
                },
                output: 8
            },
            {
                input: {
                    prices: [1, 3, 2, 8, 4, 9],
                    fee: 1
                },
                output: 10
            },
            {
                input: {
                    prices: [1, 3, 2, 8, 4, 9],
                    fee: 0
                },
                output: 13
            },
        ].forEach(({input, output}) =>
            it(`maxProfit(${JSON.stringify(input)})=${output}`, function () {
                // given
                const {prices, fee} = input;

                // when
                let actual = maxProfit(prices, fee);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});