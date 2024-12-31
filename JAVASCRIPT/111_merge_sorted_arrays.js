// 111.
// Given two sorted arrays, merge them such that the elements are not repeated
// Eg 1: 
// Input:
// Array 1: 2,4,5,6,7,9,10,13
// Array 2: 2,3,4,5,6,7,8,9,11,15
// Output:
// Merged array: 2,3,4,5,6,7,8,9,10,11,13,15

const mergeSortedArrays = (arr1, arr2) => {
    let mergedArr = [], i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (!mergedArr.includes(arr1[i])) mergedArr.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (!mergedArr.includes(arr2[j])) mergedArr.push(arr2[j]);
            j++;
        } else {
            if (!mergedArr.includes(arr1[i])) mergedArr.push(arr1[i]);
            i++;
            j++;
        }
    }
    while (i < arr1.length) {
        if (!mergedArr.includes(arr1[i])) mergedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        if (!mergedArr.includes(arr2[j])) mergedArr.push(arr2[j]);
        j++;
    }
    return mergedArr;
};

let arr1 = [2, 4, 5, 6, 7, 9, 10, 13];
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 11, 15];
console.log(mergeSortedArrays(arr1, arr2));