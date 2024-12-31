// 106.
// Given an array of integers, rearrange the array in such a way that the first elementis first maximum and second element is first minimum.
// Eg.) Input : {1, 2, 3, 4, 5, 6, 7}
// Output : {7, 1, 6, 2, 5, 3, 4}

const rearrangeArray = arr => {
    arr.sort((a, b) => a - b);
    let result = [], left = 0, right = arr.length - 1;

    while (left <= right) {
        if (left <= right) result.push(arr[right--]);
        if (left <= right) result.push(arr[left++]);
    }
    return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rearrangeArray(arr));