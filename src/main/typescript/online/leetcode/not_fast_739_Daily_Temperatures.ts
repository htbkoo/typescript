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
    const dayToWarmers = new Array(temperatures.length).fill(0);

    const lowestTemperature = 30, highestTemperature = 100;
    const temperaturesIndex = new Array(highestTemperature + 1).fill(0).map(() => []);

    temperatures.forEach((temperature, today) => {
        for (let i = lowestTemperature; i < temperature; ++i) {
            temperaturesIndex[i].forEach(day => {
                if (dayToWarmers[day] === 0) {
                    dayToWarmers[day] = today - day;
                }
            });
            temperaturesIndex[i] = [];
        }
        temperaturesIndex[temperature].push(today);
    });

    return dayToWarmers;
};

export default dailyTemperatures;