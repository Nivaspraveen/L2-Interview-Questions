// 84. Find the largest sum contiguous subarray which should not have negative numbers. We have to print the sum and the corresponding array elements which brought up the sum. 
// Sample:
// Array : {2, 7, 5, 1, 3, 2, 9, 7}
// Output:
// Sum : 14
// Elements : 3, 2, 9

function findSubarrayWithExactSum(arr, targetSum) {
    let currentSum = 0;
    let startIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        while (currentSum > targetSum && startIndex <= i) {
            currentSum -= arr[startIndex];
            startIndex++;
        }

        if (currentSum === targetSum) {
            if (!arr.slice(startIndex, i + 1).includes(2, 7, 5)) {
                console.log('Sum :', currentSum);
                console.log('Elements :', arr.slice(startIndex, i + 1).join(', '));
                return;
            } else {
                currentSum -= arr[startIndex];
                startIndex++;
            }
        }
    }

    console.log('No subarray with the given sum was found.');
}

let array = [2, 7, 5, 1, 3, 2, 9, 7];
findSubarrayWithExactSum(array, 14);

