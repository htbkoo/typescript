import Heap from "../../../../../main/typescript/practices/dsa/heap/heap1";
import runTestsFor from "./testsFactory";

describe("heap", function () {
    runTestsFor("heap", Heap.buildHeap);
});