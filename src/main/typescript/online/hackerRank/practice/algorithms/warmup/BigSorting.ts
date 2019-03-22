'use strict';

const fs = require('fs');

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

// Complete the bigSorting function below.
function bigSorting(unsorted: string[]): string[] {
    return unsorted.sort((a, b) => {
        if (a.length === b.length) {
            for (let i = 0; i < a.length; ++i) {
                const aDigit = parseInt(a.charAt(i));
                const bDigit = parseInt(b.charAt(i));
                if (aDigit !== bDigit) {
                    return aDigit - bDigit;
                }
            }
        } else {
            return a.length - b.length;
        }
    });
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let unsorted = [];

    for (let i = 0; i < n; i++) {
        const unsortedItem = readLine();
        unsorted.push(unsortedItem);
    }

    let result = bigSorting(unsorted);

    ws.write(result.join("\n") + "\n");

    ws.end();
}

export {bigSorting};