export type cidType = ReadonlyArray<[CoinNames, number]>;
type CoinNames = keyof typeof AMOUNTS;

// Less generic and requires code changes
// but make our lives much easier by sticking to int
const AMOUNTS = {
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

const ORIGINAL_AMOUNTS = {
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


function normalize(price) {
    return MULTIPLIER * price;
}

function checkCashRegister(price, cash, cid: cidType) {
    let step = AMOUNTS[SORT_AMOUNT_KEYS[0]];
    let requiredChange = normalize(cash) - normalize(price);
    let changeAvailable = cid.reduce((prev, curr) => prev + normalize(curr[1]), 0);

    if (changeAvailable === requiredChange) {
        return statusFactories.CLOSED(cid);
    }

    let coinCounts: Readonly<{ [k in CoinNames]?: number }> = cid.reduce((prev, [coinName, totalAmount]) => {
        prev[coinName] = Math.round(normalize(totalAmount) / AMOUNTS[coinName]);
        return prev;
    }, {});

    let changes = {0: {}};
    for (let i = step; (i <= (changeAvailable + step)) && (i <= (requiredChange + step)); i += step) {
        let possibleConfig = SORT_AMOUNT_KEYS.reduce((prev: any, key) => {
            // TODO: may optimize by terminating the loop earlier
            let beforeCoinAmount = (i - AMOUNTS[key]);
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

    // Here is your change, ma'am.
    if (requiredChange in changes) {
        let list = changes[requiredChange];
        let openChange = SORT_AMOUNT_KEYS.slice().reverse().filter(key => key in list).map(key => [key, list[key] * ORIGINAL_AMOUNTS[key]]);
        return statusFactories.OPEN(openChange);
    } else {
        return statusFactories.INSUFFICIENT_FUNDS();
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

export {checkCashRegister};