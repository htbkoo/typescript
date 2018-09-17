import * as chai from "chai";

describe("16.1 Number Swapper", function () {
    it("should swap number in place", function () {
        const originalA = 10, originalB = -5;
        let a = originalA, b = originalB;

        // swap - start
        a = a + b;
        b = a - b;
        a = a - b;
        // swap - end

        chai.expect(a).to.equal(originalB);
        chai.expect(b).to.equal(originalA);

    });
});