import {Heap} from "../../../../../main/typescript/online/hackerRank/practice/dataStructures/heap/qheap1";
import runTestsFor from "./testsFactory";

describe("qheap", function () {
    runTestsFor("qheap", Heap.newHeap);
});