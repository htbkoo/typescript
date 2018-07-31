const AMOUNTS = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
};

const SORT_AMOUNT_KEYS = Object.keys(AMOUNTS).sort((a, b) => AMOUNTS[a] - AMOUNTS[b]);

const statusFactories = {
    INSUFFICIENT_FUNDS() {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    },
    CLOSED(change) {
        return {status: "CLOSED", change};
    },
    OPEN(change) {
        return {status: "OPEN", change};
    },
};

function checkCashRegister(price, cash, cid: ReadonlyArray<[string, number]>) {
    let changeAmount = cash - price;
    let change = [];

    let cidWithCount: Readonly<{ [k: string]: { amount: number, count: number } }> = cid.reduce((prev, [key, totalAmount]) => {
        prev[key] = {
            amount: totalAmount,
            count: Math.round(totalAmount / AMOUNTS[key])
        };
        return prev;
    }, {});

    let step = AMOUNTS[SORT_AMOUNT_KEYS[0]];
    let max = cid.reduce((prev, curr) => prev + curr[1], step);

    let changes = {0: []};
    for (let i = 0; (i <= (max + step)) && (i <= (max + step)); i += step) {

    }

    // Here is your change, ma'am.
    return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

export {checkCashRegister};