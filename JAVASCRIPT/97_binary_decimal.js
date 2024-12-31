// 97. A number is called as binary-
// decimal if all the digits in the number should be either ‘1’ or‘0’. Any number can be written as a sum of binary
// -decimals. Our task is to find the minimumnumber of binary-decimals to represent a number.
// Input :
//  32
// Output :
//  10 11 11
 
// Input :
//  120
// Output :
//  10 110

const findBinaryDecimals = num => {
    let result = [];
    while (num > 0) {
        let binaryDecimal = 0, powerOfTen = 1, temp = num;
        while (temp > 0) {
            let lastDigit = temp % 10;
            if (lastDigit > 0) binaryDecimal += powerOfTen;
            powerOfTen *= 10;
            temp = Math.floor(temp / 10);
        }
        result.push(binaryDecimal);
        num -= binaryDecimal;
    }
    return result.sort().join(' ');
};

console.log(findBinaryDecimals(32));
console.log(findBinaryDecimals(120));