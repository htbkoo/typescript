export {Main};

// parameter "input" gets all data
function Main(input) {
    // the first line is assigned to input[0], the second line is assigned to input[1] similarly.
    input = input.split("\n");
    let tmp = input[1].split(" ");
    // convert string from integer using "parseInt"
    var a = parseInt(input[0], 10);
    var b = parseInt(tmp[0], 10);
    var c = parseInt(tmp[1], 10);
    var s = input[2];
    //output
    console.log('%d %s', a + b + c, s);
}

// Don't edit this line!
try {
    Main(require("fs").readFileSync("/dev/stdin", "utf8"));
} catch (e) {
    // ignore, so importing in local unit tests would work
}