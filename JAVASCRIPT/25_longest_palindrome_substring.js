// 25. Finding the largest palindromic sub word in a given word

const longestPalindromeSubstring = s => {
    if (!s || s.length < 1) return '';
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        } 
    }
    const longestPalindrome = s.substring(start, end + 1);
    return { length: longestPalindrome.length, substring: longestPalindrome };
};

const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
};



let word = 'babad';
let result = longestPalindromeSubstring(word);
console.log(`Longest Palindrome Substring: ${result.substring}`);
console.log(`Length: ${result.length}`);

word = 'malayalam';
result = longestPalindromeSubstring(word);
console.log(`Longest Palindrome Substring: ${result.substring}`);
console.log(`Length: ${result.length}`);

word = 'tralalalalalee';
result = longestPalindromeSubstring(word);
console.log(`Longest Palindrome Substring: ${result.substring}`);
console.log(`Length: ${result.length}`);