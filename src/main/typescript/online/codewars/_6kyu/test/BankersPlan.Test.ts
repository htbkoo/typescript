/**
 * Created by Hey on 8 Sep 2016
 */

import solution = require('../BankersPlan');
import {assert} from "chai";

function testing(f, p, c, n, i, expected) {
    assert.equal(solution.G964.fortune(f, p, c, n, i), expected)
}

describe("BankersPlan", function () {
    describe("Fixed Tests fortune", function () {
        it("Basic tests", function () {
            testing(100000, 1, 2000, 15, 1, true);
            testing(100000, 1, 9185, 12, 1, false);
            testing(100000000, 1, 100000, 50, 1, true);
            testing(100000000, 1.5, 10000000, 50, 1, false);
            testing(100000000, 5, 1000000, 50, 1, true);
        });
    });
});