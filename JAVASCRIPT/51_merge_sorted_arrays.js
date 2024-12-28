// 51. Efficiently merging two sorted arrays with O(1) extra space
// https://www.geeksforgeeks.org/efficiently-merging-two-sorted-arrays-with-o1-extra-space/  
 
function mergeSortedArrays(arr1, arr2) {
    let n = arr1.length, m = arr2.length;
    for (let i = n - 1, j = 0; i >= 0 && j < m; i--, j++) {
        if (arr1[i] > arr2[j]) [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
        else break; 
    }
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
}

// Example usage:
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

console.log("Before Merging:");
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);

mergeSortedArrays(arr1, arr2);

console.log("\nAfter Merging:");
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
