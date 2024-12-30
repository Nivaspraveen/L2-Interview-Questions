// 72.
// Adding 2 numbersGIven 2 huge numbers as seperate digits, store them in arrayand process them and calculate the sum of 2 numbers and storethe result in an array and print the sum.
// Input:Number of digits:12 
// 9 2 8 1 3 5 6 7 3 1 1 6
// Number of digits:9
// 7 8 4 6 2 1 9 9 7
// Output :9 2 8 9 2 0 2 9 5 1 1 3

const addHugeNumbers = (num1, num2) => {
    const maxLen = Math.max(num1.length, num2.length);
    const paddedNum1 = Array(maxLen - num1.length).fill(0).concat(num1);
    const paddedNum2 = Array(maxLen - num2.length).fill(0).concat(num2);
    const result = [];
    let carry = 0;

    for (let i = maxLen - 1; i >= 0; i--) {
        const sum = paddedNum1[i] + paddedNum2[i] + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    if (carry > 0) result.push(carry);
    return result.reverse();
}

const num1 = [9, 2, 8, 1, 3, 5, 6, 7, 3, 1, 1, 6];
const num2 = [7, 8, 4, 6, 2, 1, 9, 9, 7];
console.log(addHugeNumbers(num1, num2));