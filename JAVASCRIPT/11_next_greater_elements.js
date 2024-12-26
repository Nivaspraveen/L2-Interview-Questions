// 11. Find the next greater element for each element in given array.
// Input: array[]={6, 3, 9, 10, 8, 2, 1, 15, 7};
// Output: {7, 5, 10, 15, 9, 3, 2, _, 8} 
// If we are solving this question using sorting, we need touse any O(nlogn) sorting algorithm.
 
const nextGreaterElements = arr => {
    let n = arr.length, output = new Array(n).fill('_');
    let indexedArr = arr.map((val, i) => [val, i]);

    indexedArr.sort((a, b) => a[0] - b[0]);
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && indexedArr[i][0] > arr[stack[stack.length - 1]]) {
            let idx = stack.pop();
            output[idx] = indexedArr[i][0];
        }
        stack.push(indexedArr[i][1]);
    }
    return output;
};

let array = [6, 3, 9, 10, 8, 2, 1, 15, 7];
let result = nextGreaterElements(array);
console.log(result);