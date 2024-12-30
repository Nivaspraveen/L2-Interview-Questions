// 73.
// Given sorted array check if two numbers sum in it is a given value
// Input
// Array = {1 3 4 8 10 }
// N = 7
// output true

const hasTwoSum = (arr, target) => {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return true;
        if (sum < target) left++;
        else right--;
    }
    return false;
};

const arr = [1, 3, 4, 8, 10];
const N = 7;
console.log(hasTwoSum(arr, N));