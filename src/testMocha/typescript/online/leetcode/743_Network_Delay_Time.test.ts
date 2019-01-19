import * as chai from "chai";

import networkDelayTime from "../../../../main/typescript/online/leetcode/743_Network_Delay_Time";

describe("743. Network Delay Time", function () {
    describe('should find network delay time', function () {
        [
            {
                input: {
                    times: [[2, 1, 1], [2, 3, 1], [3, 4, 1]],
                    N: 4,
                    K: 2,
                },
                expected: 2
            },
            {
                input: {
                    times: [[2, 1, 1], [2, 3, 1], [3, 4, 1], [3, 2, 5],],
                    N: 4,
                    K: 3,
                },
                expected: 6
            },
            {
                input: {
                    times: [[2, 1, 1], [2, 3, 1], [3, 4, 1]],
                    N: 4,
                    K: 1,
                },
                expected: -1
            },
            {
                input: {
                    times: [[2, 1, 1], [2, 3, 1], [3, 4, 1]],
                    N: 4,
                    K: 3,
                },
                expected: -1
            },
            {
                input: {
                    times: [[2, 1, 1], [2, 3, 1], [3, 4, 1]],
                    N: 4,
                    K: 4,
                },
                expected: -1
            },
        ].forEach(({input, expected}) =>
            it(`networkDelayTime(${JSON.stringify(input)}`, function () {
                // given
                const {times, N, K} = input;

                // when
                const actual = networkDelayTime(times, N, K);

                // then
                chai.expect(actual).to.deep.equal(expected);
            })
        );
    });
});