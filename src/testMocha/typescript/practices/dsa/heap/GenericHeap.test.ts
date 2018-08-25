import GenericHeap from "../../../../../main/typescript/practices/dsa/heap/GenericHeap";
import runTestsFor from "./testsFactory";

describe("GenericHeap",  function () {
    describe("number", function () {
        runTestsFor("GenericHeap<number>", GenericHeap.buildHeap);
    });
});