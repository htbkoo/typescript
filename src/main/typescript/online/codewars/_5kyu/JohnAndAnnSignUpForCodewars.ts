/**
 * Created by Hey on 24 Sep 2016
 */

/*
 https://www.codewars.com/kata/john-and-ann-sign-up-for-codewars/train/typescript

 John and his wife Ann have decided to go to Codewars.

 On day 0 Ann will do one kata and John - he wants to know how it is working - 0.

 Let us call a(n) the number of katas done by Ann at day n we have a(0) = 1 and in the same manner j(0) = 0.

 They have chosen the following rules:

 On day n the number of katas done by Ann should be n minus the number of katas done by John at day t, t being equal to the number of katas done by Ann herself at day n - 1.

 On day n the number of katas done by John should be n minus the number of katas done by Ann at day t, t being equal to the number of katas done by John himself at day n - 1.

 Whoops! I think they need to lay out a little clearer exactly what there're getting themselves into!
 Could you write:

 1) two functions ann and john (parameter n) giving the list of the numbers of katas Ann and John should take on each day from day 0 to day n - 1 (n days - see first example below)?
 2) The total number of katas taken by ann (function sum_ann(n)) and john (function sum_john(n)) from day 0 (inclusive) to day n (exclusive)?

 Examples:

 john(11) -->  [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]
 ann(6) -->  [1, 1, 2, 2, 3, 3]

 sum_john(75) -->  1720
 sum_ann(150) -->  6930

 Note: Keep an eye on performance.

 */


export class G964 {
    private static a: number[] = [1];
    private static j: number[] = [0];

    public static john(n: number): number[] {
        // your code
        G964.initializeForTest();
        return G964.calJohn(n);
    }

    public static ann(n: number): number[] {
        // your code
        G964.initializeForTest();
        return G964.calAnn(n);
    }

    public static sumJohn(n: number): number {
        // your code
        G964.initializeForTest();

        if (G964.j.length < n) {
            G964.john(n);
        }
        return this.getArraySum(G964.j, n);
    }

    public static sumAnn(n: number): number {
        G964.initializeForTest();

        if (G964.a.length < n) {
            G964.ann(n);
        }
        return this.getArraySum(G964.a, n);
    }

    private static getArraySum(array: number[], n: number): number {
        return array.splice(0, n).reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });
    }

    private static calJohn(n: number) {
        var jLength: number = G964.j.length;
        if (jLength < n) {
            for (var i: number = jLength; i < n; ++i) {
                G964.calAnn(G964.j[i - 1] + 1);
                G964.j.push(i - G964.a[G964.j[i - 1]]);
            }
        }

        return G964.j;
    }

    private static calAnn(n: number) {
        var aLength: number = G964.a.length;
        if (aLength < n) {
            for (var i: number = aLength; i < n; ++i) {
                G964.calJohn(G964.a[i - 1] + 1);
                G964.a.push(i - G964.j[G964.a[i - 1]]);
            }
        }
        return G964.a;
    }

    private static initializeForTest() {
        G964.a = [1];
        G964.j = [0];
    }
}