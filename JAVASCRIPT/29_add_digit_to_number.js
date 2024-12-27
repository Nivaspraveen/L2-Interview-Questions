// 29. adding a digit to all the digits of a number.
// eg digit=4, number = 2875, o/p= 612119

const addDigitToNumber = (num, digit) => {
    let numStr = num.toString(), resultStr = '';
    for (let ch of numStr) {
        let newDigit = parseInt(ch) + digit;
        resultStr += newDigit.toString();
    }
    return resultStr;
};

let num = 2875, digit = 4;
console.log(addDigitToNumber(num, digit));

num = 451, digit = 68;
console.log(addDigitToNumber(num, digit));