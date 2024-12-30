// 66.
// There are n items each with a value and weight. 
// A sack is filled with the weights. In
// other words there is an array with of length n having the values of the items arr[0…n
// -1] and another array with weight arr[0…n-1]. 
// if a sack is to be filled with weight W find the minimum possible value subset.

const minSubsetValue = (values, weights, W) => {
    const n = values.length;
    const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(Infinity));
    dp[0][0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= W; w++) { 
            dp[i][w] = dp[i - 1][w]; 
            if (weights[i - 1] <= w) { 
                dp[i][w] = Math.min(dp[i][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            }
        }
    }
    return dp[n][W] === Infinity ? -1 : dp[n][W];
};

const values = [3, 2, 1, 4];
const weights = [4, 3, 2, 5];
const W = 6;

console.log(minSubsetValue(values, weights, W));