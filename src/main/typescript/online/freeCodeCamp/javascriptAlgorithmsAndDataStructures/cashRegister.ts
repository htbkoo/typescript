export type cidType = ReadonlyArray<[CoinNames, number]>;
type CoinNames = keyof typeof NORMALIZED_AMOUNTS;
type CoinCountsType = Readonly<{ [k in CoinNames]?: number }>;

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
    let changeAmountAvailable = sumChangeAmount(cid);

    if (changeAmountAvailable === changeAmountRequired) {
        return responseFactories.CLOSED(cid);
    }

    let changes = computeChangesTable(changeAmountAvailable, changeAmountRequired, cid);

    // Here is your change, ma'am.
    return createResponse(changes, changeAmountRequired);
}

function normalize(price) {
    return MULTIPLIER * price;
}

function sumChangeAmount(cid: cidType) {
    return cid.reduce((prev, curr) => prev + normalize(curr[1]), 0);
}

function computeChangesTable(available, required, cid: cidType) {
    let step = NORMALIZED_AMOUNTS[SORT_AMOUNT_KEYS[0]];
    let coinCounts: CoinCountsType = getCoinCounts(cid);
    let changes = {0: {}};

    for (let targetAmount = step; (targetAmount <= (available + step)) && (targetAmount <= (required + step)); targetAmount += step) {
        let possibleConfig = tryComputeBestConfig(targetAmount, changes, coinCounts);
        if (possibleConfig) {
            changes[targetAmount] = possibleConfig;
        }
    }

    return changes;
}

function tryComputeBestConfig(targetAmount, changes, coinCounts: CoinCountsType) {
    return SORT_AMOUNT_KEYS.reduce((prev: any, key) => {
        // TODO: may optimize by terminating the loop earlier
        let amountBeforeCoin = (targetAmount - NORMALIZED_AMOUNTS[key]);
        if (amountBeforeCoin in changes) {
            let coinCountBeforeCoin = (key in changes[amountBeforeCoin]) ? changes[amountBeforeCoin][key] : 0;
            let coinCount = 1 + coinCountBeforeCoin;

            if (coinCount <= coinCounts[key]) {
                let newConfig = {
                    ...changes[amountBeforeCoin],
                    [key]: coinCount
                };

                if (prev) {
                    let isNewConfigBetter = getTotalCount(newConfig) < getTotalCount(prev);
                    return isNewConfigBetter ? newConfig : prev;
                } else {
                    return newConfig;
                }
            }
        }

        return prev;
    }, undefined);
}

function getTotalCount(config): number {
    return Object.keys(config).reduce((prev, curr) => prev + config[curr], 0);
}

function getCoinCounts(cid: cidType): CoinCountsType {
    return cid.reduce((prev, [coinName, totalAmount]) => {
        prev[coinName] = Math.round(normalize(totalAmount) / NORMALIZED_AMOUNTS[coinName]);
        return prev;
    }, {});
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

function createResponse(changes, changeAmountRequired) {
    if (changeAmountRequired in changes) {
        let config = changes[changeAmountRequired];
        let openChange = SORT_AMOUNT_KEYS.slice().reverse().filter(key => key in config).map(key => [key, config[key] * AMOUNTS[key]]);
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