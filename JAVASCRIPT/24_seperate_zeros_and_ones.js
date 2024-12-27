// 24. Separate 0s and 1s in single array traversal

const seperateZerosAndOnes = arr => {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        while (arr[left] === 0 && left < right) left++;
        while (arr[right] === 1 && left < right) right--;
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr;
};

let arr = [0, 1, 1, 0, 0, 1, 0, 0, 1, 1];
console.log(seperateZerosAndOnes(arr));