/*

This question is designed to help you get a better understanding of basic heap operations.
You will be given queries of types:

    "1 v" - Add an element to the heap.
    "2 v" - Delete the element from the heap.
    "3" - Print the minimum of all the elements in the heap.

NOTE: It is guaranteed that the element to be deleted will be there in the heap. Also, at any instant, only distinct elements will be in the heap.

Input Format

The first line contains the number of queries, .
Each of the next lines contains a single query of any one of the above mentioned types.

Constraints

Output Format

For each query of type , print the minimum value on a single line.

Sample Input

5
1 4
1 9
3
2 4
3

Sample Output

4
9

Explanation

After the first queries, the heap contains {}. Printing the minimum gives as the output. Then, the query deletes from the heap, and the query gives as the output.

* */

const COMMANDS = {
    ADD: 1,
    DELETE: 2,
    GET_MIN: 3,
};

const commandFactory = {
    [COMMANDS.ADD]: v => heap => heap.push(v),
    [COMMANDS.DELETE]: v => heap => heap.remove(v),
    [COMMANDS.GET_MIN]: () => heap => heap.getMin(),
};

type Command = (heap: Heap) => void | number;
type State = {
    heap: Heap,
    answer: number[]
}

function processData(input) {
    //Enter your code here
    const heap = new Heap();

    const commands: Command[] = skipFirstLine(input.split("\n")).map(toCommand);
    const initialState: State = {heap, answer: []};

    return commands.reduce(({heap, answer}, command) => {
        const returnValue = command(heap);
        const parsedValue = parseFloat(returnValue as any);
        if (!Number.isNaN(parsedValue)) {
            answer.push(parsedValue);
        }
        return {heap, answer};
    }, initialState).answer.join("\n");

    function skipFirstLine(strings: string[]): string[] {
        return strings.splice(1);
    }

    function toCommand(line: string): Command {
        const [type, v] = line.split(" ");
        return commandFactory[type](v);
    }

}

export class Heap {
    private _values: number[] = [];

    public push(v: number) {
        this._values.push(v);
        this._pullUp(this._size() - 1);
    }

    public remove(v: number) {
        const remainingValues = this._values.filter(e => e !== v);
        this._values = [];
        remainingValues.forEach(nv => this.push(nv));
    }

    public getMin(): number {
        return this._values[0];
    }

    private _size() {
        return this._values.length;
    }

    private _pullUp(pos: number) {
        const isRoot = pos === 0;
        if (!isRoot) {
            const parentPos = Math.floor((pos - 1) / 2);
            if (this._isFirstBetter(pos, parentPos)) {
                this._swap(pos, parentPos);
                this._pullUp(parentPos);
            }
        }
    }

    private _isFirstBetter(pos: number, otherPos: number) {
        return this._values[pos] < this._values[otherPos];
    }

    private _swap(pos: number, otherPos: number) {
        const temp = this._values[pos];
        this._values[pos] = this._values[otherPos];
        this._values[otherPos] = temp;
    }
}

export default processData;