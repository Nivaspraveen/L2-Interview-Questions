// 1.Given a text and a wildcard pattern, implement wildcard pattern matching algorithm thatfinds if wildcard pattern is matched with text. The matching should cover the entire text (notpartial text).The wildcard pattern c
// an include the characters ‘?’ and ‘*’

// ‘?’ –
//  matches any single character
// ‘*’ –
//  Matches any sequence of characters (including the empty sequence)

const isMatch = (text, pattern) => {
  const m = text.length,
    n = pattern.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j <= n; j++) {
    if (pattern[j - 1] === "*") dp[0][j] = dp[0][j - 1];
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (pattern[j - 1] === "*") dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      else if (pattern[j - 1] === "?" || pattern[j - 1] === text[i - 1])
        dp[i][j] = dp[i - 1][j - 1];
    }
  }
  return dp[m][n];
};

// Example Usage
console.log(isMatch("abcdef", "a*e"));
console.log(isMatch("", "*"));
console.log(isMatch("abc", "**"));
console.log(isMatch("abc", "*?*"));
