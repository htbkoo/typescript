/**
 * Created by Hey on 24 Sep 2016
 */

import solution = require('../JohnAndAnnSignUpForCodewars');
import {assert} from "chai";

function testJohn(n, res) {
    assert.deepEqual(solution.G964.john(n), res);
}
function testAnn(n, res) {
    assert.deepEqual(solution.G964.ann(n), res);
}
function testSumJohn(n, res) {
    assert.equal(solution.G964.sumJohn(n), res);
}
function testSumAnn(n, res) {
    assert.equal(solution.G964.sumAnn(n), res);
}

describe("JohnAndAnnSignUpForCodewars", function () {
    describe("Fixed Tests", function () {
        it("john", function () {
            testJohn(11, [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]);
        });

        it("added sumJohn", function () {
            testSumJohn(11, 33);
        })
    });
    describe("Fixed Tests", function () {
        it("ann", function () {
            testAnn(6, [1, 1, 2, 2, 3, 3]);
        });

        it("added sumAnn", function () {
            testSumAnn(6, 12);
        })
    });
    describe("Fixed tests", function () {
        it("sumAnn", function () {
            testSumAnn(115, 4070);
        })
    });
    describe("Fixed tests", function () {
        it("sumJohn", function () {
            testSumJohn(75, 1720);
        })
    });
    describe("Submission", function () {
        describe("Fixed tests", function () {
            it("sumJohn", function () {
                testSumJohn(75, 1720);
                testSumJohn(78, 1861);
            })
        })
    });
});