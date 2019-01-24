export class MinHeap {
    private readonly elements: number[] = [];

    private constructor() {

    }

    public static newHeap(nums?: number[]): MinHeap {
        const heap = new MinHeap();
        if (nums) {
            nums.forEach(num => heap.push(num));
        }
        return heap;
    }

    public push(n: number): MinHeap {
        this.elements.push(n);
        this.pullUp(this.elements.length - 1);
        return this;
    }

    public pop(): number {
        const size = this.elements.length;
        if (size === 0) {
            throw new Error("Heap is empty");
        } else if (size === 1) {
            return this.elements.pop();
        } else {
            const n = this.elements[0];
            this.elements[0] = this.elements.pop();
            this.pushDown(0);
            return n;
        }
    }

    public isEmpty() {
        return this.elements.length === 0;
    }

    private pullUp(pos: number) {
        if (!isRoot()) {
            const parentPos = Math.floor((pos - 1) / 2);
            if (this.isFirstPosBetter(pos, parentPos)) {
                this.swap(pos, parentPos);
                this.pullUp(parentPos);
            }
        }

        function isRoot() {
            return pos === 0;
        }
    }

    private isFirstPosBetter(firstPos: number, secondPos: number) {
        return this.elements[firstPos] < this.elements[secondPos];
    }

    private swap(firstPos: number, secondPos: number) {
        const temp = this.elements[firstPos];
        this.elements[firstPos] = this.elements[secondPos];
        this.elements[secondPos] = temp;
    }

    private pushDown(pos: number) {
        const numChild = this.getNumChild(pos);
        if (numChild > 0) {
            const betterChildPos = this.getBetterChildPos(pos, numChild);
            if (this.isFirstPosBetter(betterChildPos, pos)) {
                this.swap(betterChildPos, pos);
                this.pushDown(betterChildPos);
            }
        }
    }

    private getNumChild(pos: number) {
        const size = this.elements.length;
        if (size > pos * 2 + 2) {
            return 2;
        } else if (size > pos * 2 + 1) {
            return 1;
        } else {
            return 0;
        }
    }

    private getBetterChildPos(pos: number, numChild: number): number {
        const left = pos * 2 + 1;
        switch (numChild) {
            case 1: {
                return left;
            }
            case 2: {
                const right = pos * 2 + 2;
                if (this.isFirstPosBetter(right, left)) {
                    return right;
                } else {
                    return left;
                }
            }
        }
    }
}