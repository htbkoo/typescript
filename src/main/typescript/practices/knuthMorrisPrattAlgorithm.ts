function kmpFindFirst(s: string, sub: string): number {
    let sa = s.split("");
    let suba = sub.split("");

    for (let i = 0; i <= (sa.length - suba.length); i++) {
        for (let j = 0; j < suba.length; j++) {
        }
    }

    return -1;
}

export default kmpFindFirst;

// noinspection JSUnusedLocalSymbols
function naiveFindFirst(s: string, sub: string): number {
    let sa = s.split("");
    let suba = sub.split("");

    for (let i = 0; i <= (sa.length - suba.length); i++) {
        let matched = true;
        for (let j = 0; j < suba.length; j++) {
            if (sa[i + j] !== sub[j]) {
                matched = false;
                break;
            }
        }
        if (matched) {
            return i;
        }
    }

    return -1;
}
