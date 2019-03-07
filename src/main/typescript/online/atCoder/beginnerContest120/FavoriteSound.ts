export {FavoriteSound};

// parameter "input" gets all data
function FavoriteSound(input) {
    // the first line is assigned to input[0], the second line is assigned to input[1] similarly.
    const [A, B, C] = input.split("\n")[0].split(" ").map(Number);
    // convert string from integer using "parseInt"
    const count = Math.min(C, Math.floor(B / A));

    //output
    console.log('%d', count);
}

// Don't edit this line!
try {
    FavoriteSound(require("fs").readFileSync("/dev/stdin", "utf8"));
} catch (e) {
    // ignore, so importing in local unit tests would work
}
