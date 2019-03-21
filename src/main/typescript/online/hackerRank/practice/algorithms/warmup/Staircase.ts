process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: any = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n: number) {
    staircaseForTest(n).forEach(stair => console.log(stair));
}

const SPACE = " ";
const HASH = "#";

function staircaseForTest(n): string[] {
    return Array(n).fill(0).map((_, i) => toStair(n, i + 1));
}

function toStair(n, numHash): string {
    return SPACE.repeat(n - numHash) + HASH.repeat(numHash);
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}

export {staircaseForTest};