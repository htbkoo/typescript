/**
 * Created by Hey on 10 Feb 2017
 */

import solution = require('../ProductOfConsecutiveFibNumbers');
import {assert} from "chai";

function dotest(prod, expected) {
    assert.deepEqual(solution.G964.productFib(prod), expected);
}

describe("Fixed Tests", function () {
    it("productFib", function () {
        dotest(4895, [55, 89, true]);
        dotest(5895, [89, 144, false]);
    });
});
