/*
https://leetcode.com/problems/reorder-log-files/

You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

    Each word after the identifier will consist only of lowercase letters, or;
    Each word after the identifier will consist only of digits.

We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.



Example 1:

Input: ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]



Note:

    0 <= logs.length <= 100
    3 <= logs[i].length <= 100
    logs[i] is guaranteed to have an identifier, and a word after the identifier.

* */

/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function (logs: string[]): string[] {
    return Logs.fromStrings(logs).asArray();
};

class Logs {
    private readonly letterLogs: string[];
    private readonly digitLogs: string[];

    constructor(letterLogs: string[], digitLogs: string[]) {
        this.letterLogs = letterLogs;
        this.digitLogs = digitLogs;
    }

    public asArray(): string[] {
        return this.letterLogs.concat(this.digitLogs);
    }

    public static fromStrings(logs: string[]): Logs {
        const letterLogs: string[] = [], digitLogs: string[] = [];
        logs.forEach(log => {
            if (this.isDigitLog(log)) {
                digitLogs.push(log);
            } else {
                letterLogs.push(log);
            }
        });
        letterLogs.sort(this.letterLogsSorting.bind(this));

        return new Logs(letterLogs, digitLogs);
    }

    private static letterLogsSorting(a: string, b: string): number {
        const order = this.ignoreIdentifier(a).localeCompare(this.ignoreIdentifier(b));
        const isTie = order === 0;
        if (isTie) {
            return this.compareIdentifier(a, b);
        } else {
            return order;
        }
    }

    private static isDigitLog(log: string): boolean {
        const firstSpaceIndex = this.firstSpaceIndex(log);
        const firstCharacterAfterIdentifier = log.charAt(firstSpaceIndex + 1);
        return Number.isInteger(parseInt(firstCharacterAfterIdentifier));
    }

    private static ignoreIdentifier(s: string): string {
        return s.substring(this.firstSpaceIndex(s) + 1);
    }

    private static getIdentifier(s: string): string {
        return s.substring(0, this.firstSpaceIndex(s));
    }

    private static firstSpaceIndex(s: string): number {
        return s.indexOf(" ");
    }

    private static compareIdentifier(a: string, b: string) {
        return this.getIdentifier(a).localeCompare(this.getIdentifier(b));
    }
}

export default reorderLogFiles;