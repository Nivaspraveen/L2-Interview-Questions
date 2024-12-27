// 30. Form the largest possible number using the array of numbers.

const largestNumber = arr => {
    if (!arr || arr.length === 0) return [];
    const sortedNums = arr.map(String).sort((a, b) => (b + a).localeCompare(a + b));
    const result = sortedNums.join('');
    return result[0] === '0' ? '0' : result;
};

let arr = [5, 21, 67, 10, 22, 9];
console.log(largestNumber(arr));

arr = [];
console.log(largestNumber(arr));