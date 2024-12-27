// 35. Sort the array elements in descending order according to their frequency of occurrence
// Input : [ 2 2 3 4 5 12 2 3 3 3 12 ]
// Output : [ 3 3 3 3 2 2 2 12 12 4 5 ]
// Explanation : 3 occurred 4 times, 2 occurred 3 times, 12 occurred 2 times, 4 occurred 1time, 5 occurred 1 time 
// Input : [ 0 -1 2 1 0 ]
// Output : 0 0 -1 1 2 sort single occurrence elements in ascending order

const sortByFrequency = arr => {
    const freqMap = new Map();
    arr.forEach(num => freqMap.set(num, (freqMap.get(num) || 0) + 1));

    const freqArr = Array.from(freqMap.entries());
    freqArr.sort((a, b) => {
        if (b[1] === a[1]) return a[1] === 1 ? a[0] - b[0] : b[0] - a[0];
        return b[1] - a[1];
    });

    const result = [];
    freqArr.forEach(([num, freq]) => {
        for (let i = 0; i < freq; i++) result.push(num);
    });
    return result;
};

let arr1 = [ 2, 2, 3, 4, 5, 12, 2, 3, 3, 3, 12 ];
console.log(sortByFrequency(arr1));

let arr2 = [0, -1, 2, 1, 0];
console.log(sortByFrequency(arr2));