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
    // Dijkstra's algorithm, reference: https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
    type OutboundsMap = {
        [from: number]: {
            [to: number]: number
        }
    };

    const initialMap = [...Array(N)].reduce((obj, _, i) => {
        obj[i + 1] = {};
        return obj;
    }, {});

    const outboundsMap: OutboundsMap = times.reduce((map, [u, v, w]) => {
        map[u][v] = map[u][v] ? Math.min(map[u][v], w) : w;
        return map;
    }, initialMap);

    const heap = NetworkDelayTimeDijkstraMinHeap.newHeap([{label: K, distance: 0}]);

    const dists = {};

    while (!heap.isEmpty() && !isAllPopulated()) {
        const {label, distance} = heap.pop();
        if (!(label in dists)) {
            dists[label] = distance;
            const outwardEdges = outboundsMap[label];
            Object.keys(outwardEdges).forEach(destination => {
                const w = outwardEdges[destination];
                heap.add({label: parseInt(destination), distance: distance + w});
            });
        }
    }

    return isAllPopulated() ? Object.keys(dists).reduce((max, label) => Math.max(max, dists[label]), -1) : -1;

    function isAllPopulated() {
        return Object.keys(dists).length === N;
    }
};

type Node = {
    distance: number,
    label: number
}

export class NetworkDelayTimeDijkstraMinHeap {
    private readonly elements: Node[] = [];

    private constructor() {
    }

    public static newHeap(input: Node[]): NetworkDelayTimeDijkstraMinHeap {
        return input.reduce((heap, node) => heap.add(node), new NetworkDelayTimeDijkstraMinHeap());
    }

    public add(node: Node): NetworkDelayTimeDijkstraMinHeap {
        this.elements.push(node);
        this.pullUp(this.elements.length - 1);
        return this;
    }

    public pop(): Node {
        if (this.isEmpty()) {
            throw new Error("heap is empty")
        } else if (this.elements.length === 1) {
            return this.elements.pop();
        } else {
            const answer = this.elements[0];
            this.elements[0] = this.elements.pop();
            this.pushDown(0);
            return answer;
        }
    }

    public isEmpty() {
        return 0 === this.elements.length;
    }

    private pullUp(pos: number) {
        if (!isRoot()) {
            const parentPos = this.parentPos(pos);
            if (this.isFirstBetter(pos, parentPos)) {
                this.swap(pos, parentPos);
                this.pullUp(parentPos);
            }
        }

        function isRoot() {
            return 0 === pos;
        }
    }

    private parentPos(pos: number) {
        return Math.floor((pos - 1) / 2);
    }

    private isFirstBetter(first: number, second: number) {
        return this.getDistance(first) < this.getDistance(second);
    }

    private getDistance(pos: number) {
        return this.elements[pos].distance;
    }

    private swap(first: number, second: number) {
        const temp = this.elements[first];
        this.elements[first] = this.elements[second];
        this.elements[second] = temp;
    }

    private pushDown(pos: number) {
        const numChild = this.countChild(pos);
        if (numChild > 0) {
            const betterChild = this.findBetterChild(pos, numChild);
            if (this.isFirstBetter(betterChild, pos)) {
                this.swap(betterChild, pos);
                this.pushDown(betterChild);
            }
        }
    }

    private countChild(pos: number) {
        const size = this.elements.length;
        if (size > pos * 2 + 2) {
            return 2;
        } else if (size > pos * 2 + 1) {
            return 1;
        } else {
            return 0;
        }
    }

    private findBetterChild(pos: number, numChild: number) {
        const leftPos = pos * 2 + 1;
        switch (numChild) {
            case 1: {
                return leftPos;
            }
            case 2: {
                const rightPos = pos * 2 + 2;
                if (this.isFirstBetter(rightPos, leftPos)) {
                    return rightPos;
                } else {
                    return leftPos;
                }
            }
        }
        throw new Error(`Unknown numChild: ${numChild} for Pos: ${pos}`);
    }
}

var networkDelayTime_Floyd_Warshall = function (times: number[][], N: number, K: number): number {
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