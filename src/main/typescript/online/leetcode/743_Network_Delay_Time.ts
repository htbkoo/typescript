/*
https://leetcode.com/problems/network-delay-time/

 There are N network nodes, labelled 1 to N.

Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

Note:

    N will be in the range [1, 100].
    K will be in the range [1, N].
    The length of times will be in the range [1, 6000].
    All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 1 <= w <= 100.

* */

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function (times: number[][], N: number, K: number): number {
    // Floyd-Warshall algorithm, reference: https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm
    const dist = [...Array(N)].map(() => new Array(N).fill(Number.MAX_SAFE_INTEGER));

    for (let i = 0; i < N; ++i) {
        dist[i][i] = 0;
    }

    times.forEach(([u, v, w]) => dist[normalizeVertex(u)][normalizeVertex(v)] = w);


    for (let k = 0; k < N; ++k) {
        for (let i = 0; i < N; ++i) {
            for (let j = 0; j < N; ++j) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }

    const maxDist = dist[normalizeVertex(K)].reduce(findMax, dist[normalizeVertex(K)][0]);
    return Number.MAX_SAFE_INTEGER === maxDist ? -1 : maxDist;

    function findMax(max, dist) {
        return Math.max(max, dist);
    }

    function normalizeVertex(x) {
        return x - 1;
    }
};

export default networkDelayTime;