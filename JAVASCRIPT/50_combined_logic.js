// 50. Given an input array, find the number of occurrences of a particular number withoutlooping (use hashing)
// Diamond pattern printing based on some conditions
// Given an array of characters print the characters that have ‘n’ number of occurrences. 
// If a character appears consecutively it is counted as 1 occurrence 
// Eg:
// a b a a b c c d e d
// Here a has only 2 occurrences

// Function to find the no. of occurences of a particular number(hashing)

const countOccurences = (arr, num) => {
    const countMap = {};
    arr.forEach(el => countMap[el] = (countMap[el] || 0) + 1);
    return countMap[num] || 0;
};


// Function to print a diamond pattern

const printDiamond = rows => {
    for (let i = 1; i <= rows; i++) console.log(' '.repeat(rows - i) + '*'.repeat(2 * i - 1));
    for (let i = rows - 1; i >= 1; i--) console.log(' '.repeat(rows - i) + '*'.repeat(2 * i - 1));
};

// Function to find characters that have 'n' number of occurrences

const countConsecutiveOccurences = (arr, n) => {
    const countMap = {};
    let prevChar = null;

    arr.forEach(char => {
        if (char !== prevChar) countMap[char] = (countMap[char] || 0) + 1;
        prevChar = char;
    });
    return Object.keys(countMap).filter(char => countMap[char] === n);
};

const numArr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const num = 3;
console.log(countOccurences(numArr, num));

const rows = 5;
printDiamond(rows);

const charArr = ['a', 'b', 'a', 'a', 'b', 'c', 'c', 'd', 'e', 'd'];
const n = 2;
console.log(countConsecutiveOccurences(charArr, n));