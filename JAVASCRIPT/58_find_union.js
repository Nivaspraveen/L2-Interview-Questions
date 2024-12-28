// 58.
// Given two arrays. Find its union.
// Input :
// Enter size of first array : 6
// Enter the elements : 1 2 3 4 5 3
// Enter size of second array : 4
// Enter the elements : 1 2 7 5
// OUTPUT :
// 1 2 3 4 5 7

const findUnion = (arr1, arr2) => {
    let unionSet = new Set([...arr1, ...arr2]);
    return Array.from(unionSet);
}

let arr1 = [1, 2, 3, 4, 5, 3], arr2 = [1, 2, 7, 5];
console.log(findUnion(arr1, arr2).join(' '));