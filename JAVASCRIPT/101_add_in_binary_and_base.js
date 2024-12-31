// 101.
// Given two binary numbers add the two numbers in binary form without convertingthem to decimal value.
// eg) 
// a = 1010 b = 11001
// o/p 100011
// b.The two numbers were given in base neg) a = 123 b = 13 n = 4
// o/p 202

const addNumbers = (a, b, base) => {
    let carry = 0, result = '', maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');
    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(a[i], base) + parseInt(b[i], base) + carry;
        carry = Math.floor(sum / base);
        result = (sum % base).toString(base) + result;
    }
    if (carry > 0) result = carry.toString(base) + result;
    return result;
}

let a = '1010', b = '11001';
console.log("Binary Addition:", addNumbers(a, b, 2));

a = '123', b = '13';
console.log("Base 4 Numbers:", addNumbers(a, b, 4));