/**
 * Created by Hey on 9 Sep 2016
 */

// import the solution so that you can test anything exported out of it
import solution = require('../Multiply');
// import the type of assertion library you wish to use (Chai recommended)
import {assert} from "chai";

// We are using Mocha BDD:

describe("Multiply", function () {
    describe("Testing...", function () {
        // anything exported from the solution has automatically been imported for you already as "solution"
        var results1 = solution.multiply(1, 1);
        var results2 = solution.multiply(2, 1);

        it("Should return something that isn't falsy", function () {
            assert.equal(!!results1, true, "Expected function to return a value");
            assert.equal(!!results2, true, "Expected function to return a value");
        });
    });
});