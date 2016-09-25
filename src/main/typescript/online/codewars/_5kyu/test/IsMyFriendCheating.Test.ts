/**
 * Created by Hey on 25 Sep 2016
 */

import solution = require('../IsMyFriendCheating');
import {assert} from "chai";

function testIt(n, expected) {
    assert.deepEqual(solution.G964.removeNb(n), expected)
}

describe("IsMyFriendCheating", function () {
    describe("Fixed Tests removeNb", function () {
        it("Basic tests", function () {
            testIt(26, [[15, 21], [21, 15]]);
            testIt(101, [[55, 91], [91, 55]]);
            testIt(102, [[70, 73], [73, 70]]);
            testIt(110, [[70, 85], [85, 70]]);
        });
    });
});