/**
 * Created by Hey on 31 Aug 2016
 */

/*
 https://www.codewars.com/kata/are-they-the-same/train/typescript

 Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 Examples
 Valid arrays

 a = [121, 144, 19, 161, 19, 144, 19, 11]
 b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

 comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

 a = [121, 144, 19, 161, 19, 144, 19, 11]
 b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

 Invalid arrays

 If we change the first number to something else, comp may not return true anymore:

 a = [121, 144, 19, 161, 19, 144, 19, 11]
 b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

 comp(a,b) returns false because in b 132 is not the square of any number of a.

 a = [121, 144, 19, 161, 19, 144, 19, 11]
 b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

 comp(a,b) returns false because in b 36100 is not the square of any number of a.
 Remarks

 a or b might be [] (all languages). a or b might be nil or null or None (except in Haskell, Elixir, C++).

 If a or b are nil (or null or None), the problem doesn't make sense so return false.

 If a or b are empty the result is evident by itself.

 */

export class G964 {
    public static comp(a1:number[], a2:number[]):boolean {
        // your code
        // should be ok as long as not overflow
        if (a1 === null || a2 === null) {
            return false;
        }
        if (a1.length !== a2.length) {
            return false;
        }

        var getSum = function (previousValue, currentValue) {
            return previousValue + currentValue;
        };
        var a1SquaredSum:number = a1.map(function (value) {
            return value * value;
        }).reduce(getSum, 0);
        var a2Sum:number = a2.reduce(getSum, 0);

        return a1SquaredSum === a2Sum;
    }

    //noinspection JSUnusedGlobalSymbols
    public static failed_comp(a1:number[], a2:number[]):boolean {
        // your code
        // naive O(nm) solution
        if (a1 === null || a2 === null) {
            return false;
        }
        if (a2.length === 0) {
            return true;
        }
        if (a1.length === 0) {
            return false;
        }

        return a1.every(function (value) {
            //var sq:number = value * value;
            //return a2.indexOf(sq) !== -1;


            var sq:number = value * value;
            var index = a2.indexOf(sq);
            var isFound:boolean = index !== -1;
            if (isFound) {
                a2.splice(index, 1);
            }
            return isFound;

        });
    }
}