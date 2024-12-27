// 37. Print second frequently occurring number in given series
// Example :
// Input: 1 1 2 3 1 2 4
// Output: 2
// Explanation: 1 occurs 3 times, 2 occurs 2 times, 3 occurs 1 time and 4 occurs 1 time.
// Hence second frequently occurring number in given series is 2

const secondMostFrequent = arr => {
    const freqMap = new Map();
    for (let num of arr) freqMap.set(num, (freqMap.get(num) || 0) + 1);
    const sortedFreqs = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
    if (sortedFreqs.length < 2) return null;
    return sortedFreqs[1][0];
};

const arr = [1, 1, 2, 3, 1, 2, 4];
console.log(secondMostFrequent(arr));