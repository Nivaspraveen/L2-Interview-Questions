// 61.
// Given an array of numbers and a window of size k. Print the maximum of numbersinside the window for each step as the window moves from the beginning of the array.

// INPUT :
// Enter the array size : 8
// Enter the elements : 1,3,5,2,1,8,6,9
// Enter the window size : 3
// OUTPUT :5 5 5 8 8 9

const slidingWindowMax = (nums, k) => {
    const n = nums.length, result = [], deque = [];
    for (let i = 0; i < n; i++) {
        if (deque.length > 0 && deque[0] < i - k + 1) deque.shift();
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) deque.pop();
        deque.push(i);
        if (i >= k - 1) result.push(nums[deque[0]]); 
    }
    return result; 
};

const nums = [1, 3, 5, 2, 1, 8, 6, 9];
const k = 3;
console.log(slidingWindowMax(nums, k));