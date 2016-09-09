/**
 * Created by Hey on 18 Aug 2016
 */

import solution = require('../AreTheyTheSame');
import {assert} from "chai";

function testing(a1, a2, expected) {
    assert.equal(solution.G964.comp(a1, a2), expected)
}

describe("AreTheyTheSame", function () {
    it("Basic tests", function () {
        var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        var a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
        testing(a1, a2, true);
        a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        a2 = [11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
        testing(a1, a2, false);
    });
    describe("Fixed Tests comp", function () {
        describe("Submission Basic tests", function () {
            [
                {
                    a1: [121, 144, 19, 161, 19, 144, 19, 11],
                    a2: [121, 14641, 20736, 361, 25921, 361, 20736, 361],
                    expected: true
                },
                {
                    a1: [121, 144, 19, 161, 19, 144, 19, 11],
                    a2: [231, 14641, 20736, 361, 25921, 361, 20736, 361],
                    expected: false
                },
                {
                    a1: [121, 144, 19, 161, 19, 144, 19, 11],
                    a2: [121, 14641, 20736, 36100, 25921, 361, 20736, 361],
                    expected: false
                }
            ].forEach(function (testCase, index) {
                it("#" + index, function () {
                    testing(testCase.a1, testCase.a2, testCase.expected);
                });
            })
        });
        describe("Submission Random tests", function () {
            var testCases = require("./resources/AreTheyTheSame/randomTestCases.json");
            testCases.forEach(function (testCase, index) {
                it("#" + index, function () {
                    testing(testCase.a1, testCase.a2, testCase.expected);
                });
            })
        });

    });
});

/*

 ]


 Random tests:

 */