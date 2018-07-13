function fibonacci(n: number): number {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return tail_fibonacci(n, 2, 1, 1);
}

function tail_fibonacci(n: number, curr: number, small: number, large: number): number {
    if (n === curr) {
        return large;
    }
    return tail_fibonacci(n, curr + 1, large, small + large);
}

export default fibonacci;

// For reference
// noinspection JSUnusedLocalSymbols
function simple_fibonacci(n: number): number {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1
    }
    return simple_fibonacci(n - 1) + simple_fibonacci(n - 2);
}