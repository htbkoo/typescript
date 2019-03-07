export {Equals};

// parameter "input" gets all data
function Equals(input) {
    // the first line is assigned to input[0], the second line is assigned to input[1] similarly.
    const {N, M, p, x, y} = parseInput(input);


    //output
    return 11..toString();
}

function parseInput(input) {
    const [line0, line1, ...lines] = input.split("\n");
    const [N, M] = parseSpaceSeparatedInts(line0);
    const p = parseInt(line1);

    const x = [], y = [];
    lines.forEach(line => {
        const [xi, yi] = parseSpaceSeparatedInts(line);
        x.push(xi);
        y.push(yi);
    });

    return {N, M, p, x, y};
}

function parseSpaceSeparatedInts(line: string) {
    return line.split(" ").map(Number);
}

function atCoder(input) {
    console.log(Equals(input));
}

// Don't edit this line!
try {
    atCoder(require("fs").readFileSync("/dev/stdin", "utf8"));
} catch (e) {
    // ignore
}
