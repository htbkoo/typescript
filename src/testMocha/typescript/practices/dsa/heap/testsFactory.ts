import * as chai from "chai";

const heapTestCases = require("./resources/heapTestCases.json");
const defaultOutputAssertion = heap => ({
    matches: expected => expected.forEach((num, i) => {
        const v = heap.pop();
        chai.expect(v).to.equal(num, `wrong at index: ${i}, expected: <${num}> but was <${v}>`);
    })
});

export default (heapClassName, newHeapOf, transformInput?, assertOutput = defaultOutputAssertion) => heapTestCases.forEach(({input, expected}, index) =>
    it(`${heapClassName} - case ${index}: should sort by Heap Sort(${input})=${expected}`, function () {
        // given
        // when
        if (transformInput) {
            input = transformInput(input);
        }
        const heap = newHeapOf(input);

        // then
        assertOutput(heap).matches(expected);
    })
);