// 62.
// Find the minimum number of times required to represent a number as sum of squares.
// 12 = 1^2 + 1^2 + 1^2 + 1^2 + 1^2 + 1^2 +1^2 + 1^2 + 1^2 + 1^2 + 1^2 + 1^2
// 12 = 2^2 + 2^2 + 2^2
// 12 = 3^2 + 1^2 + 1^2
// Input: 12
// Output: min: 3

const minSquares = n => {
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
    return dp[n];
};

let n = 12;
console.log(`Input: ${n}`);
console.log(minSquares(n));

n = 20;
console.log(`Input: ${n}`);
console.log(minSquares(n));