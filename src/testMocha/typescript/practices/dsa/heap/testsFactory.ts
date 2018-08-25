import * as chai from "chai";

const heapTestCases = require("./resources/heapTestCases.json");
const defaultOutputAssertion = (actual) => ({
    matches: expected => expected.forEach((num, i) => {
        let v = actual.pop();
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
        let actual = newHeapOf(input);

        // then
        assertOutput(actual).matches(expected);
    })
);