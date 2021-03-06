import * as chai from "chai";

import subdomainVisits, {backToStringRepresentation} from "../../../../main/typescript/online/leetcode/811_Subdomain_Visit_Count";
import {
    toUrlFreqMap,
    getFreqPair,
    combineFreq
} from "../../../../main/typescript/online/leetcode/811_Subdomain_Visit_Count";

describe("811. Subdomain Visit Count", function () {
    describe('should count subdomain visit', function () {
        [
            {
                input: {cpdomains: ["9001 discuss.leetcode.com"]},
                expected: ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
            },
            {
                input: {cpdomains: ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]},
                expected: ["901 mail.com", "50 yahoo.com", "900 google.mail.com", "5 wiki.org", "5 org", "1 intel.mail.com", "951 com"]
            },
        ].forEach(({input, expected}) =>
            it(`subdomainVisits(${JSON.stringify(input)}`, function () {
                // given
                const {cpdomains} = input;

                // when
                const actual = subdomainVisits(cpdomains);

                // then
                chai.expect(actual).to.have.members(expected);
            })
        );
    });

    describe("getFreqPair", function () {
        [
            {cpdomain: "9001 discuss.leetcode.com", expected: ["discuss.leetcode.com", 9001]},
            {cpdomain: "9001 discuss leetcode.com", expected: ["discuss leetcode.com", 9001]},
            {cpdomain: "100 discuss leetcode.com", expected: ["discuss leetcode.com", 100]},
        ].forEach(({cpdomain, expected}) =>
            it(`should map to freq pair for "${cpdomain}"`, function () {
                // given
                // when
                const pair = getFreqPair(cpdomain);

                // then
                chai.expect(pair).to.deep.equal(expected);
            })
        );
    });

    describe("toUrlFreqMap", function () {
        [
            {
                pair: ["discuss.leetcode.com", 9001],
                expected: {
                    "discuss.leetcode.com": 9001,
                    "leetcode.com": 9001,
                    "com": 9001,
                }
            },
            {
                pair: ["discuss leetcode.com", 100],
                expected: {
                    "discuss leetcode.com": 100,
                    "com": 100,
                }
            },
        ].forEach(({pair, expected}) =>
            it("should map to url frequency map", function () {
                // given
                // when
                const map = toUrlFreqMap(pair);

                // then
                chai.expect(map).to.deep.equal(expected);
            })
        );
    });

    describe("combineFreq", function () {
        [
            {
                frequencies: [
                    {
                        "discuss.leetcode.com": 9001,
                        "leetcode.com": 9001,
                        "com": 9001,
                    },
                    {
                        "discuss leetcode.com": 100,
                        "com": 100,
                    }
                ],
                expected: {
                    "discuss.leetcode.com": 9001,
                    "leetcode.com": 9001,
                    "discuss leetcode.com": 100,
                    "com": 9101,
                }
            },
            {
                frequencies: [
                    {
                        "discuss.leetcode.com": 9001,
                        "leetcode.com": 9001,
                        "com": 9001,
                    },
                    {
                        "discuss leetcode.com": 100,
                        "com": 100,
                    },
                    {
                        "discuss.leetcode.com": 100,
                        "com": 100,
                    }
                ],
                expected: {
                    "discuss.leetcode.com": 9101,
                    "leetcode.com": 9001,
                    "discuss leetcode.com": 100,
                    "com": 9201,
                }
            },
            {
                frequencies: [
                    {
                        "discuss.leetcode.com": 100,
                        "leetcode.com": 100,
                        "com": 100,
                    },
                    {
                        "discuss leetcode.com": 100,
                        "com": 100,
                    },
                    {
                        "discuss.leetcode.com": 100,
                        "com": 100,
                    },
                    {
                        "discuss.leetcode.com": 100,
                        "leetcode.com": 100,
                        "com": 100,
                    },
                ],
                expected: {
                    "discuss.leetcode.com": 300,
                    "leetcode.com": 200,
                    "discuss leetcode.com": 100,
                    "com": 400,
                }
            },
        ].forEach(({frequencies, expected}) =>
            it("should combine frequencies counts", function () {
                // given
                // when
                const total = (frequencies as any).reduce(combineFreq, {});

                // then
                chai.expect(total).to.deep.equal(expected);
            })
        );
    });

    describe("backToStringRepresentation", function () {
        [
            {
                url: "discuss.leetcode.com",
                freq: 9001,
                expected: "9001 discuss.leetcode.com"
            },
        ].forEach(({url, freq, expected}) =>
            it("should map back to string representation", function () {
                // given
                // when
                const string = backToStringRepresentation(url, freq);

                // then
                chai.expect(string).to.deep.equal(expected);
            })
        );
    });
});
