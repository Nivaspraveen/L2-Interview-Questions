// 16. Find the result subtraction, multiplication, division of two integers using + operator.
// Input: 6 and 4

// output: 
// addition 6+4 = 10, 
// subtraction 6+(-4) = 2, 
// multiplication = 24, 
// division = 1 

// Input : -8 and -4 

// Output:
// addition -8+(-4) = -12, 
// subtraction (-8)+(-(-4)) = -4, 
// multiplication = 32, 
// division = 2

const addition = (a, b) => a + b;

const subtraction = (a, b) => a + (-b);

const multiplication = (a, b) => {
    let result = 0;
    const positive = Math.abs(b);
    for (let i = 0; i < positive; i++) result += a;
    return b < 0 ? -result : result;
};

const division = (a, b) => {
    if (b === 0) throw new Error("Division by zero");
    const posA = Math.abs(a), posB = Math.abs(b);
    let result = 0, t = posA;
    while (t >= posB) {
        t = subtraction(t, posB);
        result++;
    }
    return (a < 0 && b > 0) || (a > 0 && b < 0) ? -result : result;
}

let a = 6, b = 4; 
console.log(`addition ${a}+${b} = ${addition(a, b)}`); 
console.log(`subtraction ${a}+(-${b}) = ${subtraction(a, b)}`); 
console.log(`multiplication = ${multiplication(a, b)}`); 
console.log(`division = ${division(a, b)}`); 

a = -8, b = -4; 
console.log(`addition ${a}+${b} = ${addition(a, b)}`); 
console.log(`subtraction ${a}+(-${-b}) = ${subtraction(a, b)}`); 
console.log(`multiplication = ${multiplication(a, b)}`); 
console.log(`division = ${division(a, b)}`);