// 2. Given an input string and a dictionary of words, find out if the input string can besegmented into a space-separated sequence of dictionary words. 
// See following examplesfor more details.

// Consider the following dictionary{ i, like, sam, sung, samsung, mobile, ice,cream, icecream, man, go, mango}

// Input: ilike 
// Output: YesThe string can be segmented as "i like".

// Input: ilikesamsung
// Output: YesThe string can be segmented as "i like samsung"or "i like sam sung".

const wordBreak = (input, dict) => {
    const n = input.length, dp = Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            const word = input.slice(j, i);
            if (dp[j] && dict.has(word)) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}

// Example Usage:
const dict = new Set(["i", "like", "sam", "sung", "samsung", "mobile", "ice", "cream", "icecream", "man", "go", "mango"]);
console.log(wordBreak("ilike", dict));
console.log(wordBreak("ilikesamsung", dict));
console.log(wordBreak("iliketocode", dict));