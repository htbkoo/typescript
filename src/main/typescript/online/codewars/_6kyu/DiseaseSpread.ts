/**
 * Created by Hey on 31 Aug 2016
 */

/*
 https://www.codewars.com/kata/disease-spread/train/typescript

 In 1978 the British Medical Journal reported on an outbreak of influenza at a British boarding school. There were 1000 students. The outbreak began with one infected student.

 We want to study the spread of the disease through the population of this school. The total population may be divided into three: the infecteds (i), those who have recovered (r), and those who are still susceptible (s) to get the disease.

 We will study the disease on a period of tm days. One model of propagation uses 3 differential equations:

 (1) s'(t) = -r * s(t) * i(t)
 (2) i'(t) =  r * s(t) * i(t) - a * i(t)
 (3) r'(t) =  a * i(t)

 where s(t), i(t), r(t) are the susceptibles, infecteds, recovereds at time t and s'(t), i'(t), r'(t) the corresponding derivatives. b and a are constants: b is representing a number of contacts which can spread the disease and a is a fraction of the infecteds that will recover.

 We can transform equations (1), (2), (3) in finite differences (https://en.wikipedia.org/wiki/Finite_difference_method#Example:_ordinary_differential_equation) (http://www.codewars.com/kata/56347fcfd086de8f11000014)

 (I)    S[k+1] = S[k] - dt * b * S[k] * I[k]
 (II)   I[k+1] = I[k] + dt * (b * S[k] * I[k] - a * I[k])
 (III)  R[k+1] = R[k] + dt * I[k] *a

 The interval [0, tm] will be divised in n small intervals of length dt = tm/n. Initial conditions here could be : S0 = 999, I0 = 1, R0 = 0 Whatever S0 and I0, R0 (number of recovereds at time 0) is always 0.

 The function epidemic(tm, n, r a) will return the maximum number of infecteds as an integer (truncate to integer the result of max(I)).
 Example:

 tm = 14 ;n = 336 ;s0 = 996 ;i0 = 2 ;b = 0.00206 ;a = 0.41
 epidemic(tm, n, s0, i0, b, a) --> 483

 Note:

 You will pass the tests if abs(actual - expected) <= 1

 Keeping track of the values of susceptibles, infecteds and recovereds you can plot the solutions of the 3 differential equations. See another example below on the plot.

 alternative text

 */

export class G964 {
    public static epidemic(tm, n, s0, i0, b, a) {
        // your code
        var r0:number = 0, dt:number = tm / n;
        var sNext:number, iNext:number, rNext:number;
        var sCur:number = s0, iCur:number = i0, rCur:number = r0;
        var iMax:number = i0;
        for (var i:number = 0; i < n; ++i) {
            sNext = sCur - dt * b * sCur * iCur;
            iNext = iCur + dt * (b * sCur * iCur - a * iCur);
            rNext = rCur + dt * iCur * a;

            iMax = Math.max(iMax, iNext);

            sCur = sNext;
            iCur = iNext;
            rCur = rNext;
        }

        return iMax;
    }
}