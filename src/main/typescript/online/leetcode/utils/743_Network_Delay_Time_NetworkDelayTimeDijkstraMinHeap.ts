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