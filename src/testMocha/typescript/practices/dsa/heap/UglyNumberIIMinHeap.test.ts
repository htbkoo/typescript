import runTestsFor from "./testsFactory";
import {MinHeap} from "../../../../../main/typescript/online/leetcode/slow_264_Ugly_Number_II";

describe("UglyNumberIIMinHeap", function () {
    runTestsFor("UglyNumberIIMinHeap", MinHeap.heapFrom, input => input);
});