import {angryProfessor} from "./AngryProfessor";

describe("AngryProfessor", function () {
    [
        {k: 3, a: [-1, -3, 4, 2], expected: "YES"},
        {k: 2, a: [0, -1, 2, 1], expected: "NO"},
    ].forEach(({k, a, expected}) =>
        it(`test for k=${k}, a=${a.toString()}`, function () {
            // given
            // when
            const results = angryProfessor(k, a);

            // then
            expect(results).toEqual(expected);
        })
    );
});
