// 89.
// Given a Roman numeral, find its corresponding decimal value.
// https://www.geeksforgeeks.org/converting-roman-numerals-decimal-lying-1-3999/ 

const romanToDecimal = roman => {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
        const curr = romanMap[roman[i]], next = romanMap[roman[i + 1]];
        (next && curr < next) ? total -= curr : total += curr;
    }
    return total;
};

console.log(romanToDecimal('IX'));
console.log(romanToDecimal('XL'));
console.log(romanToDecimal('MCMXCIV'));