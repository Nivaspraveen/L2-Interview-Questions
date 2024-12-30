// 75.
// Write function to find multipication of 2 numbers using +operator You must use minimu possible iterations.
// Input: 3 , 4
// Output 12

const multiply = (a, b) => {
    let result = 0, absA = Math.abs(a), absB = Math.abs(b);
    while (absA > 0) {
        if (absA % 2 === 1) result += absB;
        absB += absB;
        absA = Math.floor(absA / 2);
    }
    return (a < 0) ^ (b < 0) ? -result : result;
};

console.log(multiply(3, 4));
console.log(multiply(3, -4));
console.log(multiply(-3, 4));
console.log(multiply(-3, -4));