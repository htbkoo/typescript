import * as chai from "chai";

import {checkCashRegister,} from "../../../../../main/typescript/online/freeCodeCamp/javascriptAlgorithmsAndDataStructures/cashRegister";

describe("cashRegister", function () {

    it("checkCashRegister(19.5, 20, [[\"PENNY\", 1.01], [\"NICKEL\", 2.05], [\"DIME\", 3.1], [\"QUARTER\", 4.25], [\"ONE\", 90], [\"FIVE\", 55], [\"TEN\", 20], [\"TWENTY\", 60], [\"ONE HUNDRED\", 100]]) should  return an object", function () {
        // given
        // when
        let actual = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

        // then
        chai.expect(actual).to.be.an("object");
    });

    [
        {
            input: {
                price: 19.5,
                cash: 20,
                cid: [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
            }, expected: {status: "OPEN", change: [["QUARTER", 0.5]]}
        },
        {
            input: {
                price: 3.26,
                cash: 100,
                cid: [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
            },
            expected: {
                status: "OPEN",
                change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]
            }
        },
        {
            input: {
                price: 19.5,
                cash: 20,
                cid: [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
            }, expected: {status: "INSUFFICIENT_FUNDS", change: []}
        },
        {
            input: {
                price: 19.5,
                cash: 20,
                cid: [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
            }, expected: {status: "INSUFFICIENT_FUNDS", change: []}
        },
        {
            input: {
                price: 19.5,
                cash: 20,
                cid: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
            },
            expected: {
                status: "CLOSED",
                change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
            }
        },

    ].forEach(({input, expected}) =>
        it(`checkCashRegister(${JSON.stringify(input)}) should return ${JSON.stringify(expected)}.`, function () {
            // given
            const {price, cash, cid}: { price: number, cash: number, cid: any } = input;

            // when
            let actual = checkCashRegister(price, cash, cid);

            // then
            chai.expect(actual).to.deep.equal(expected);
        })
    );
});