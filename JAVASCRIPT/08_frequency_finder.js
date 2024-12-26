// 8. Find the frequency of all numbers in an array.
// Note: use dynamic memory allocation.
// For example, if the input is {1, 2, 45, 67, 1, 88}, do not calculate the frequency of all elements from 1 to 88.

const findFrequency = arr => {
    let freqMap = {};
    for (let num of arr) freqMap[num] = (freqMap[num] || 0) + 1;
    for (let [num, freq] of Object.entries(freqMap)) console.log(`${num}: ${freq}`);
}

// Example usage 
findFrequency([1, 2, 45, 67, 1, 88]);