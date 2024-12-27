// 35. Sort the array elements in descending order according to their frequency of occurrence
// Input : [ 2 2 3 4 5 12 2 3 3 3 12 ]
// Output : [ 3 3 3 3 2 2 2 12 12 4 5 ]

const sortByFrequency = arr => {
    const freqMap = new Map();
    arr.forEach(num => freqMap.set(num, (freqMap.get(num) || 0) + 1));

    const freqArr = Array.from(freqMap.entries());
    freqArr.sort((a, b) => {
        if (b[1] === a[1]) return b[0] - a[0];
        return b[1] - a[1];
    });

    const result = [];
    freqArr.forEach(([num, freq]) => {
        for (let i = 0; i < freq; i++) result.push(num);
    });
    return result;
};

const arr = [ 2, 2, 3, 4, 5, 12, 2, 3, 3, 3, 12 ];
console.log(sortByFrequency(arr));