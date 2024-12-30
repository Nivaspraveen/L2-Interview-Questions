// 76.
// Given array find maximum sum of contiguous sub array
// {-2 -3 4 -1 -2 1 5 -3}
// output 7 
// elements [ 4 -1 -2 1 5]

const maxSumSubarray = arr => {
    let maxSum = -Infinity, currSum = 0, start = 0, end = 0, temp = 0;
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        if (currSum > maxSum) {
            maxSum = currSum;
            start = temp;
            end = i;
        }
        if (currSum < 0) {
            currSum = 0;
            temp = i + 1;
        }
    }
    const subarr = arr.slice(start, end + 1);
    return {maxSum, subarr};
};

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
const result = maxSumSubarray(arr);
console.log("Maximum Sum: ", result.maxSum);
console.log("Output: ", result.subarr );