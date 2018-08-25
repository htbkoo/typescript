import * as chai from "chai";
import Heap from "../../../../../main/typescript/practices/dsa/heap/heap1";

const heapTestCases = require("./resources/heapTestCases.json");

describe("heap", function () {
    heapTestCases.forEach(({input, expected}, index) =>
        it(`case ${index}: should sort by Heap Sort(${input})=${expected}`, function () {
            // given
            // when
            let actual = Heap.buildHeap(input);

            // then
            expected.forEach((num, i) => {
                let v = actual.pop();
                chai.expect(v).to.equal(num, `wrong at index: ${i}, expected: <${num}> but was <${v}>`);
            });
        })
    );
});