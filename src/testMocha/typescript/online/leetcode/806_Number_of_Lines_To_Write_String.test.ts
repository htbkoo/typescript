import * as chai from "chai";

import numberOfLines from "../../../../main/typescript/online/leetcode/806_Number_of_Lines_To_Write_String";

describe("806. Number of Lines To Write String", function () {
    describe('should return the number of lines', function () {
        [
            {
                input: {
                    widths: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                    S: "abcdefghijklmnopqrstuvwxyz"
                },
                output: [3, 60]
            },
            {
                input: {
                    widths: [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                    S: "bbbcccdddaaa"
                },
                output: [2, 4]
            }
        ].forEach(({input, output}) =>
            it(`numberOfLines(${JSON.stringify(input)})=${output}`, function () {
                // given
                const {widths, S} = input;
                // when
                let actual = numberOfLines(widths, S);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});