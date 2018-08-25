import runTestsFor from "./testsFactory";
import {FrequencyHeap} from "../../../../../main/typescript/online/leetcode/347_Top_K_Frequent_Elements";
import * as chai from "chai";

describe("FrequencyHeap", function () {
    runTestsFor("FrequencyHeap", FrequencyHeap.fromObj,
        input => input.reduce((obj, v, i) => {
            obj[i] = v;
            return obj;
        }, {}),
        actual => ({
            matches(expected) {
                expected.reverse().forEach((num, i) => {
                    let v = actual.pop().frequency;
                    chai.expect(v).to.equal(num, `wrong at index: ${i}, expected: <${num}> but was <${v}>`);
                });
            }
        })
    );
});