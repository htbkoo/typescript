/*
https://leetcode.com/problems/daily-temperatures/

Given a list of daily temperatures, produce a list that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

* */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures: number[]): number[] {
    const length = temperatures.length;
    const indexStack = [], dayToWarmers = new Array(length).fill(0);

    indexStack.push(length - 1);

    for (let i = length - 2; i >= 0; --i) {
        let topDay, top, current;
        do {
            topDay = peek(indexStack);
            top = temperatures[topDay];
            current = temperatures[i];
            if (current < top) {
                dayToWarmers[i] = topDay - i;
                break;
            }
            indexStack.pop();
        } while (!isEmpty(indexStack));

        indexStack.push(i);
    }

    return dayToWarmers;

    function peek(stack: number[]) {
        let stackLength = stack.length;
        if (stackLength === 0) {
            throw new Error("stack is empty");
        }
        return stack[stackLength - 1];
    }

    function isEmpty(stack): boolean {
        return stack.length === 0;
    }
};

export default dailyTemperatures;