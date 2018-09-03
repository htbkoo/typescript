import * as chai from "chai";
import isMonotonic from "../../../../main/typescript/online/leetcode/896_Monotonic_Array";

describe("896. Monotonic Array", function () {
    describe('should return true if and only if the given array A is monotonic', function () {
        [
            {input: [1, 2, 2, 3], output: true},
            {input: [6, 5, 4, 4], output: true},
            {input: [1, 3, 2], output: false},
            {input: [1, 2, 4, 5], output: true},
            {input: [1, 1, 1], output: true},
            {input: [1, 1, 0], output: true},
        ].forEach(({input, output}) =>
            it(`isMonotonic(${JSON.stringify(input)})=${output}`, function () {
                // given
                // when
                let actual = isMonotonic(input);

                // then
                chai.expect(actual).to.equal(output);
            })
        );
    });
});