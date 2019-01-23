/*
https://leetcode.com/problems/top-k-frequent-words/

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:

Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:

Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.

Note:

    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Input words contain only lowercase letters.

Follow up:

    Try to solve it in O(n log k) time and O(n) extra space.

* */

import {TopKFrequentHeap} from "./utils/692_Top_K_Frequent_Words_TopKFrequentHeap";

type FrequencyMap = {
    [word: string]: number;
};

export type Entry = {
    word: string,
    frequency: number
};

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words: string[], k: number): string[] {
    const frequencies: FrequencyMap = words.reduce(countFrequency, {});

    const entries = Object.keys(frequencies).map(toEntry);

    const heap = TopKFrequentHeap.newHeap(entries, k);

    return [...Array(k)].map(() => heap.pop().word).reverse();

    function countFrequency(map: FrequencyMap, word: string): FrequencyMap {
        map[word] = (word in map) ? map[word] + 1 : 1;
        return map;
    }

    function toEntry(word: string): Entry {
        return {
            word,
            frequency: frequencies[word]
        };
    }
};

export default topKFrequent;