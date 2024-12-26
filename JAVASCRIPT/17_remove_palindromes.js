// 17. Given a sentence of string, in that remove the palindrome words and print the remaining.
// Input:He did a good deed
// Output:He good

// Input:Hari speaks malayalam
// Output:Hari speaks

const isPalindrome = (w) => {
    let l = 0,
        r = w.length - 1;
    while (l < r) {
        if (w[l] !== w[r]) return false;
        l++;
        r--;
    }
    return true;
};

const removePalindromes = (phrase) => {
  return phrase
    .split(" ")
    .filter((w) => !isPalindrome(w.toLowerCase()))
    .join(" ");
};

let input1 = "He did a good deed";
let input2 = "Hari speaks malayalam";
console.log(removePalindromes(input1));
console.log(removePalindromes(input2));
