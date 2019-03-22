'use strict';

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    console.log(miniMaxSumForTest(arr));
}

function miniMaxSumForTest(arr): string {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((prev, curr) => prev + curr, 0);
    return `${sum - max} ${sum - min}`;
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

export {miniMaxSumForTest}