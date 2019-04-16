import * as chai from "chai";
import SortingEngine from "../../../../../../main/typescript/practices/dsa/sorting/SortingEngine";
import rawHeapTestCases from "../../heap/resources/heapTestCases.json";

type T = string | number;
type ArgumentsList = ArrayLike<any>;
type TestSuiteType = keyof typeof TestCases;
type Options = { argumentsList?: ArgumentsList, enabledTestSuites?: Array<TestSuiteType> };

interface TestCase {
    inputArray: Array<T>,
    expected: Array<T>,
    confirmUnmodified: Array<T>,
    compareFn?: (val1: T, val2: T) => number
}

const DEFAULT_TEST_CASES: TestCase[] = [
    {inputArray: [2, 5, 3, 4, 1], expected: [1, 2, 3, 4, 5], confirmUnmodified: [2, 5, 3, 4, 1]},
    {inputArray: [], expected: [], confirmUnmodified: []},
    {inputArray: [1], expected: [1], confirmUnmodified: [1]},
    {inputArray: [1, 2], expected: [1, 2], confirmUnmodified: [1, 2]},
    {inputArray: [2, 1], expected: [1, 2], confirmUnmodified: [2, 1]},
    {inputArray: [3, 5, 1, 4, 2, 6], expected: [1, 2, 3, 4, 5, 6], confirmUnmodified: [3, 5, 1, 4, 2, 6]},
    {inputArray: [3, 5, 1, 7, 4, 2, 6], expected: [1, 2, 3, 4, 5, 6, 7], confirmUnmodified: [3, 5, 1, 7, 4, 2, 6]},
    {
        inputArray: ["b", "a"],
        expected: ["a", "b"],
        confirmUnmodified: ["b", "a"],
        compareFn: (str1, str2) => ((str1 == str2) ? 0 : ((str1 > str2) ? 1 : -1))
    },
];

const heapSortTestCases: TestCase[] = rawHeapTestCases.map(({input, expected}) => ({
    inputArray: input,
    expected,
    confirmUnmodified: input.slice()
}));

const TestCases = {
    DEFAULT: DEFAULT_TEST_CASES,
    HEAP_SORT: heapSortTestCases
};

const defaultOptions: Options = {argumentsList: [], enabledTestSuites: ["DEFAULT",]};

export function runDefaultTestCases(EngineClass: Function, options?: Options) {
    const {argumentsList, enabledTestSuites} = {...defaultOptions, ...options};

    enabledTestSuites.forEach(
        suiteName =>
            describe(`TestSuite - ${suiteName}`, function () {
                TestCases[suiteName].forEach(({inputArray, expected, confirmUnmodified, compareFn}: TestCase) =>
                    it(`should sort the generic array ${JSON.stringify(inputArray)} with ${EngineClass.name}`, function () {
                        // given
                        const engine: SortingEngine = Reflect.construct(EngineClass, argumentsList);

                        // when
                        const actual = engine.sort(inputArray, compareFn);

                        // then
                        chai.expect(actual).to.deep.equal(expected, "array should be sorted");
                        chai.expect(inputArray).to.deep.equal(confirmUnmodified, "order of original array should not be changed");
                    })
                )
            })
    );
}