// 14. Given an array with repeated numbers, Find the top three repeated numbers.
// input: array[]={3, 4, 2, 3, 16, 3, 15, 16, 15, 15, 16, 2, 3}
// output: 3, 16, 15

const topThreeRepeatedNumbers = arr => {
    const freqMap = new Map();
    arr.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });
    const freqArr = Array.from(freqMap.entries());
    freqArr.sort((a, b) => b[1] - a[1]);
    const topThree = freqArr.slice(0, 3).map(entry => entry[0]);
    return topThree;
};

let arr = [3, 4, 2, 3, 16, 3, 15, 16, 15, 15, 16, 2, 3];
console.log(topThreeRepeatedNumbers(arr));