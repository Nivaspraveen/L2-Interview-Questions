// 74. Compiuting value of sin (x)
// Input: x = 30 
// n = 10 
// output = 0.5
// Hint : The equation 
// sin(x) = x – x^3 / 3! + x^5 / 5! – ….
 
const factorial = num => {
    let fact = 1;
    for (let i = 2; i <= num; i++) fact *= i;
    return fact;
};

const sinX = (x, n) => {
    const rad = (x * Math.PI) / 180;
    let result = 0;
    for (let i = 0; i < n; i++) {
        const term = Math.pow(rad, 2 * i + 1) / factorial(2 * i + 1);
        result += (i % 2 === 0 ? 1 : -1) * term;
    }
    return parseFloat(result.toFixed(10));
}

const x = 30, n = 10;
console.log(sinX(x, n));