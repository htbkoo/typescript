import * as chai from "chai";

const heapTestCases = require("./resources/heapTestCases.json");

export default (heapClassName, newHeapOf) => heapTestCases.forEach(({input, expected}, index) =>
    it(`${heapClassName} - case ${index}: should sort by Heap Sort(${input})=${expected}`, function () {
        // given
        // when
        let actual = newHeapOf(input);

        // then
        expected.forEach((num, i) => {
            let v = actual.pop();
            chai.expect(v).to.equal(num, `wrong at index: ${i}, expected: <${num}> but was <${v}>`);
        });
    })
);