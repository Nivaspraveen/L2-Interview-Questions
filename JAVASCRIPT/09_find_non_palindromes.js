// 9. From the input sentence given, find the strings which are not palindrome and print it.
// Input: he knows malayalam
// Output: he knows

// Function to check if a string is palindrome
const isPalindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};

// Function to find non-palindrome words from sentence
const findNonPalindrome = sentence => {
    const words = sentence.split(' ');
    const nonPalin = words.filter(w => !isPalindrome(w));
    return nonPalin.join(' ');
};

// Example Usage
console.log(findNonPalindrome("he knows malayalam"));
console.log(findNonPalindrome("I love my mom and dad"));