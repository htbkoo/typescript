export {Equals};

// parameter "input" gets all data
function Equals(input) {
    // the first line is assigned to input[0], the second line is assigned to input[1] similarly.
    const {N, M, p, xy} = parseInput(input);

    const sets = DisjointSets.buildFrom(N, xy);

    //output
    return p.filter((num, i) => sets.areInSameSet(num, i + 1)).length;
}

class DisjointSets {
    private readonly trees: DisjointSetTree[];

    private constructor(trees: DisjointSetTree[]) {
        this.trees = trees;
    }

    public static buildFrom(N, xy): DisjointSets {
        const trees = Array.apply(this, Array(N + 1)).map(() => new DisjointSetTree());
        xy.forEach(({x, y}) => trees[x].union(trees[y]));

        return new DisjointSets(trees);
    }

    areInSameSet(num1: number, num2: number) {
        return this.trees[num1].isSameSetAs(this.trees[num2]);
    }
}

class DisjointSetTree {
    parent: DisjointSetTree = this;
    rank = 0;

    isSameSetAs(other: DisjointSetTree): boolean {
        return this.find() === other.find();
    }

    // union by rank
    union(other: DisjointSetTree): void {
        let xRoot = this.find();
        let yRoot = other.find();
        if (xRoot !== yRoot) {
            if (xRoot.rank < yRoot.rank) {
                [xRoot, yRoot] = [yRoot, xRoot];
            }
            yRoot.parent = xRoot;
            if (yRoot.rank === xRoot.rank) {
                xRoot.rank = xRoot.rank + 1;
            }
        }
    }

    private find() {
        if (this.parent !== this) {
            this.parent = this.parent.find();
        }
        return this.parent;
    }
}

function parseInput(input) {
    const [line0, line1, ...lines] = input.split("\n");
    const [N, M] = parseSpaceSeparatedInts(line0);
    const p = parseSpaceSeparatedInts(line1);
    const xy = lines.map(line => {
        const [x, y] = parseSpaceSeparatedInts(line);
        return {x, y};
    });

    return {N, M, p, xy};
}

function parseSpaceSeparatedInts(line: string) {
    return line.split(" ").map(Number);
}

function atCoder(input) {
    console.log('%d', Equals(input));
}

// Don't edit this line!
try {
    atCoder(require("fs").readFileSync("/dev/stdin", "utf8"));
} catch (e) {
    // ignore
}
