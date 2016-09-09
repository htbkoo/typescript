/**
 * Created by Hey on 9 Sep 2016
 */

import solution = require('../ColorChoice');
import {assert} from "chai";

function testing(m, n, expected) {
    assert.equal(solution.G964.checkchoose(m, n), expected)
}

describe("Fixed Tests checkchoose", function() {
    it("Basic tests", function() {
        testing(6, 4, 2);
        testing(4, 4, 1);
        testing(4, 2, -1);
        testing(35, 7, 3);
        testing(36, 7, -1);
    });
});
