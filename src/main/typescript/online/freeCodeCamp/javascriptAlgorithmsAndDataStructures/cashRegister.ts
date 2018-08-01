export type cidType = ReadonlyArray<[CoinNames, number]>;
type CoinNames = keyof typeof NORMALIZED_AMOUNTS;

// Less generic and requires code changes
// but make our lives much easier by sticking to int
const NORMALIZED_AMOUNTS = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
};
const MULTIPLIER = 100;

const SORT_AMOUNT_KEYS = Object.keys(NORMALIZED_AMOUNTS).sort((a, b) => NORMALIZED_AMOUNTS[a] - NORMALIZED_AMOUNTS[b]);

const responseFactories = {
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

function checkCashRegister(price, cash, cid: cidType) {
    let changeAmountRequired = normalize(cash) - normalize(price);
    let changeAmountAvailable = cid.reduce((prev, curr) => prev + normalize(curr[1]), 0);

    if (changeAmountAvailable === changeAmountRequired) {
        return responseFactories.CLOSED(cid);
    }
    let coinCounts = getCoinCounts(cid);
    let changes = computeChangesTable(changeAmountAvailable, changeAmountRequired, coinCounts);

    // Here is your change, ma'am.
    return createResponse(changes, changeAmountRequired);
}

function normalize(price) {
    return MULTIPLIER * price;
}

function getCoinCounts(cid: cidType): Readonly<{ [k in CoinNames]?: number }> {
    return cid.reduce((prev, [coinName, totalAmount]) => {
        prev[coinName] = Math.round(normalize(totalAmount) / NORMALIZED_AMOUNTS[coinName]);
        return prev;
    }, {});
}

function computeChangesTable(changeAvailable, requiredChange, coinCounts: Readonly<{ [k in CoinNames]?: number }>) {
    let step = NORMALIZED_AMOUNTS[SORT_AMOUNT_KEYS[0]];
    let changes = {0: {}};
    for (let i = step; (i <= (changeAvailable + step)) && (i <= (requiredChange + step)); i += step) {
        let possibleConfig = SORT_AMOUNT_KEYS.reduce((prev: any, key) => {
            // TODO: may optimize by terminating the loop earlier
            let beforeCoinAmount = (i - NORMALIZED_AMOUNTS[key]);
            if (beforeCoinAmount in changes) {
                let coinCount = 1 + ((key in changes[beforeCoinAmount]) ? changes[beforeCoinAmount][key] : 0);

                if (coinCount <= coinCounts[key]) {
                    let newConfig = {
                        ...changes[beforeCoinAmount],
                        [key]: coinCount
                    };

                    if (prev) {
                        if (getTotalCount(newConfig) < getTotalCount(prev)) {
                            return newConfig
                        } else {
                            return prev;
                        }
                    } else {
                        return newConfig;
                    }
                }
            }

            return prev;

            function getTotalCount(config): number {
                return Object.keys(config).reduce((prev, curr) => prev + config[curr], 0);
            }
        }, undefined);

        if (possibleConfig) {
            changes[i] = possibleConfig;
        }
    }
    return changes;
}

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

function createResponse(changes, requiredChange) {
    if (requiredChange in changes) {
        let list = changes[requiredChange];
        let openChange = SORT_AMOUNT_KEYS.slice().reverse().filter(key => key in list).map(key => [key, list[key] * AMOUNTS[key]]);
        return responseFactories.OPEN(openChange);
    } else {
        return responseFactories.INSUFFICIENT_FUNDS();
    }
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

export default checkCashRegister;