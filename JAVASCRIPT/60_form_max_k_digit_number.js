// 60.
// Given an array of numbers and a number k. Print the maximum possible k digit numberwhich can be formed using given numbers.
// INPUT :
// Enter the array size : 4
// Enter the elements : 1 4 973 97
// Enter number of digits : 3
// OUTPUT :974
// INPUT :Enter the array size : 6
// Enter the elements : 1 4 89 73 9 7
// Enter number of digits : 5
// OUTPUT :
// 98973

const findMaxKDigitNumber = (arr, k) => {
    arr.sort((a, b) => (b + '' + a) - (a + '' + b));
    const allDigits = arr.join(''), result = allDigits.slice(0, k);
    return parseInt(result, 10);
};

let arr1 = [1, 4, 973, 97];
let k1 = 3;
console.log(findMaxKDigitNumber(arr1, k1));

let arr2 = [1, 4, 89, 73, 9, 7]; 
let k2 = 5;
console.log(findMaxKDigitNumber(arr2, k2));