import * as chai from "chai";

import subdomainVisits from "../../../../main/typescript/online/leetcode/811_Subdomain_Visit_Count";
import {toUrlFreqMap, getFreqPair} from "../../../../main/typescript/online/leetcode/811_Subdomain_Visit_Count";

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
                chai.expect(actual).to.deep.equal(expected);
            })
        );
    });

    describe("toUrlFreqMap", function () {

    });

    describe("getFreqPair", function () {
        [
            {cpdomain: "9001 discuss.leetcode.com", expected: ["discuss.leetcode.com", 9001]}
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
});
