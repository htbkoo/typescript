import * as chai from "chai";

import canVisitAllRooms from "../../../../main/typescript/online/leetcode/841_Keys_and_Rooms";

describe("841. Keys and Rooms", function () {
    describe('should check if canVisitAllRooms', function () {
        [
            {
                input: {
                    rooms: [[1],[2],[3],[]]
                },
                expected: true
            },
            {
                input: {
                    rooms: [[1,3],[3,0,1],[2],[0]]
                },
                expected: false
            },
        ].forEach(({input, expected}) =>
            it(`canVisitAllRooms(${JSON.stringify(input)}`, function () {
                // given
                const {rooms} = input;

                // when
                const actual = canVisitAllRooms(rooms);

                // then
                chai.expect(actual).to.deep.equal(expected);
            })
        );
    });
});

