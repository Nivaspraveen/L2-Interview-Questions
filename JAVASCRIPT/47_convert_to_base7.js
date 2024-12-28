// 47. Given a large number convert it to the base 7.

const convertToBase7 = num => {
    if (num === 0) return '0';
    let isNeg = num < 0;
    num = Math.abs(num);
    let base7 = '';
    while (num > 0) {
        base7 = (num % 7) + base7;
        num = Math.floor(num / 7);
    }
    return isNeg ? '-' + base7 : base7;
};

let num = 1000;
console.log(convertToBase7(num));

num = -10000;
console.log(convertToBase7(num));

num = 0;

console.log(convertToBase7(num));