import runTestsFor from "./testsFactory";
import {Heap} from "../../../../../main/typescript/online/leetcode/378_Kth_Smallest_Element_in_a_Sorted_Matrix";
import {chunk} from "lodash";

describe("kthSmallestHeap", function () {
    runTestsFor("kthSmallestHeap", Heap.fromMatrix,
        input => chunk(input, Math.round(Math.sqrt(input.length)))
    );
});