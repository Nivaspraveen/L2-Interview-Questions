// 94.
// You’re given an array. Print the elements of the array which are greater than its previous elements in the array.
// Input :
//  2, -3, -4, 5, 9, 7, 8
// Output:
//  2 5 9 
// You should solve this question in O(n) time.

const printGreaterElements = arr => {
    let result = [];
    if (arr.length > 0) result.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) result.push(arr[i]);
    }
    return result.filter((value, index) => index === 0 || value > result[index - 1]);
}

let arr = [2, -3, -4, 5, 9, 7, 8];
console.log(printGreaterElements(arr).join(' '));

arr = [13, 56, -9, -123, 0, 66, 90, 2];
console.log(printGreaterElements(arr).join(' '));