/*
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
* */

const possiblePatterns: RegExp[] = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^\(\d{3}\) \d{3}-\d{4}$/,
    /^\(\d{3}\) \d{3} \d{4}$/,
    /^\d{10}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\)\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3} \d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
];

function telephoneCheck(str: string): boolean {
    // Good luck!
    return possiblePatterns.some(pattern => pattern.test(str));
}

export {telephoneCheck};

// const rejectedPatterns: RegExp[] = [
//     /^\(\d{10}\)$/,
// ];
// !rejectedPatterns.some(pattern => pattern.test(str)) && possiblePatterns.some(pattern => pattern.test(str));
