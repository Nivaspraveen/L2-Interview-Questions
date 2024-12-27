// 22. array of numbers were given to find a number which has same sum of numbers in it’s
// either side.
// I/p 1, 2, 3, 7, 6
// O/p 7(has 1+ 2+3 in left 6 in right)

const findBalancedNumber = arr => {
    for (let i = 0; i < arr.length; i++) {
        const leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0),
            rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);
        if (leftSum === rightSum) return arr[i];
    }
    return null;
};

let arr = [1, 2, 3, 7, 6];
console.log(findBalancedNumber(arr));