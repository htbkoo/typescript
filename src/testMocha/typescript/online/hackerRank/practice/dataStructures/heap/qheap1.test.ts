import * as chai from "chai";
import qheap1 from "../../../../../../../main/typescript/online/hackerRank/practice/dataStructures/heap/qheap1";


describe("QHEAP1", function () {
    describe('should implement qheap1', function () {
        [
            {input: `any\n1 4\n1 3\n3\n1 2\n3\n1 1\n2\n3\n2\n3\n2\n3\n2\n3`, output: "4\n9"},
            {input: `5\n1 4\n1 9\n3\n2 4\n3`, output: "4\n9"},
        ].forEach(({input, output}) =>
            it(`qheap1(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                let actual = qheap1(input);

                // then
                chai.expect(actual).to.equal(output);
            })
        );
    });
});