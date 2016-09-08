/**
 * Created by Hey on 18 Aug 2016
 */

import solution = require('../DiseaseSpread');
import {assert} from "chai";

function assertFuzzyEquals(actual, expected) {
    var inrange = Math.abs(actual - expected) <= 1;
    assert.equal(inrange, true, "Expected Math.abs(actual - expected) <= 1. Expected: " + expected + ", got: " + actual + "><");
}
function testing(tm, n, s0, i0, b, a, expected) {
    assertFuzzyEquals(solution.G964.epidemic(tm, n, s0, i0, b, a), expected);
}
describe("DiseaseSpread", function () {
    describe("Fixed Tests epidemic", function () {
        it("Basic tests", function () {
            var tm = 18, n = 432, s0 = 1004, i0 = 1, b = 0.00209, a = 0.51;
            testing(tm, n, s0, i0, b, a, 420);
            tm = 12;
            n = 288;
            s0 = 1007;
            i0 = 2;
            b = 0.00206;
            a = 0.45;
            testing(tm, n, s0, i0, b, a, 461);
            tm = 13;
            n = 312;
            s0 = 999;
            i0 = 1;
            b = 0.00221;
            a = 0.55;
            testing(tm, n, s0, i0, b, a, 409);
        });
    })
});
