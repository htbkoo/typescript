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

// Complete the plusMinus function below.
function plusMinus(arr: number[]) {
    plusMinusForTest(arr).forEach(ratio => console.log(ratio));
}

function plusMinusForTest(arr: number[]): string[] {
    let pos = 0, zero = 0, neg = 0;
    arr.forEach(n => {
        if (n === 0) {
            zero++;
        } else if (n > 0) {
            pos++;
        } else {
            neg++;
        }
    });
    const length = arr.length;
    return [
        pos / length,
        neg / length,
        zero / length
    ].map(n => n.toString());
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

export {plusMinusForTest}