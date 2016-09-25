/**
 * Created by Hey on 25 Sep 2016
 */

/*
 https://www.codewars.com/kata/is-my-friend-cheating/train/typescript

 A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
 Within that sequence, he chooses two numbers, a and b.
 He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
 Given a number n, could you tell me the numbers he excluded from the sequence?

 The function takes the parameter: n (don't worry, n is always strictly greater than 0 and small enough so we shouldn't have overflow) and returns an array of the form:

 [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

 with all (a, b) which are the possible removed numbers in the sequence 1 to n.

 [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

 It happens that there are several possible (a, b). The function returns an empty array if no possible numbers are found which will prove that my friend has not told the truth!
 Examples:

 */


export class G964 {
    public static removeNb(n: number) {
        // your code
        var answer = [];
        var sum = (n * (n + 1)) / 2;

        function getB(a: number): number {
            return (sum - a) / (a + 1);
        }

        function isInteger(x) {
            return (typeof x === 'number') && (!isNaN(x)) && (x % 1 === 0);
        }

        for (var a: number = 1; a < n; ++a) {
            var b: number = getB(a);

            if ((isInteger(b)) && (b <= n)) {
                answer.push([a, b]);
            }
        }
        return answer;
    }

    static SlowFailedApproach = class {
        //noinspection JSUnusedGlobalSymbols
        public static removeNb(n: number) {
            // your code
            var answer = [];
            var sum = (n * (n + 1)) / 2;
            for (var i: number = 1; i <= n; ++i) {
                for (var j: number = i + 1; j <= n; ++j) {
                    if (i * j === (sum - i - j)) {
                        answer.push([i, j]);
                        answer.push([j, i]);
                    }
                }
            }
            return answer;
        }
    };

    static WithSlightOptimizationStillSlowFailedApproach = class {
        //noinspection JSUnusedGlobalSymbols
        public static removeNb(n: number) {
            // your code
            var answer = [];
            var sum = (n * (n + 1)) / 2;
            for (var i: number = 1; i < n; ++i) {
                if ((i * n < (sum - i - n)) || (i * (i + 1) > (sum - i - (i + 1)))) {
                    continue;
                }
                for (var j: number = i + 1; j <= n; ++j) {
                    if (i * j === (sum - i - j)) {
                        answer.push([i, j]);
                        answer.push([j, i]);
                    }
                }
            }
            return answer;
        }
    }
}
