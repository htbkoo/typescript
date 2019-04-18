/*
https://leetcode.com/problems/letter-case-permutation/

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]

Note:

    S will be a string with length between 1 and 12.
    S will consist only of letters or digits.

* */

/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function (S: string): string[] {
    return permutation(S, 0, [""]).filter(candidate => candidate.length > 0);
};

function permutation(S: string, index: number, candidates: string[]): string[] {
    if (index < S.length) {
        const character = S.charAt(index);
        return candidates.map(candidate => permutation(S, index + 1, withCharacter(candidate, character)))
            .reduce((arr, results) => arr.concat(results), []);
    } else {
        return candidates;
    }
}

function withCharacter(candidate: string, character: string): string[] {
    const isDigit = Number.isInteger(parseInt(character));
    if (isDigit) {
        return [candidate.concat(character)];
    } else {
        return [candidate.concat(character.toLowerCase()), candidate.concat(character.toUpperCase())];
    }
}

export default letterCasePermutation;