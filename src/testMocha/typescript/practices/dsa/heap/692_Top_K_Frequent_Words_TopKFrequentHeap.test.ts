import runTestsFor from "./testsFactory";
import * as chai from "chai";
import {TopKFrequentHeap} from "../../../../../main/typescript/online/leetcode/utils/692_Top_K_Frequent_Words_TopKFrequentHeap";

describe("TopKFrequentHeap", function () {
    describe("number", function () {
        runTestsFor("TopKFrequentHeap",
            TopKFrequentHeap.newHeap,
            input => input.map(val => ({word: val.toString(), frequency: val})),
            heap => ({
                matches(expected) {
                    return expected.forEach((num, i) => {
                        const {frequency} = heap.pop();
                        chai.expect(frequency).to.equal(num, `wrong at index: ${i}, expected: <${num}> but was <${frequency}>`);
                    });
                }
            })
        );
    });
});