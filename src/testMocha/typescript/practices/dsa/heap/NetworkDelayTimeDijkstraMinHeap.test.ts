import runTestsFor from "./testsFactory";
import {NetworkDelayTimeDijkstraMinHeap} from "../../../../../main/typescript/online/leetcode/utils/743_Network_Delay_Time_NetworkDelayTimeDijkstraMinHeap";
import * as chai from "chai";

describe("NetworkDelayTimeDijkstraMinHeap", function () {
    describe("number", function () {
        runTestsFor("NetworkDelayTimeDijkstraMinHeap",
            NetworkDelayTimeDijkstraMinHeap.newHeap,
            input => input.map(val => ({label: 0, distance: val})),
            actual => ({
                matches(expected) {
                    return expected.forEach((num, i) => {
                        const {distance} = actual.pop();
                        chai.expect(distance).to.equal(num, `wrong at index: ${i}, expected: <${num}> but was <${distance}>`);
                    });
                }
            })
        );
    });
});