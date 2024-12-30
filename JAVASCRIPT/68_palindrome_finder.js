// 68.
// Take a 2 or 3 digit input number, reverse it and add it to the original number until theobtained number is a palindrome or 5 iterations are completed.
// Input : n = 32
// Output : 5523 + 32 = 55 which is a palindrome.
// Input : 39
// Output : 363

const reverseNumber = num => parseInt(num.toString().split('').reverse().join(''), 10);

const isPalindrome = num => {
    const str = num.toString();
    return str === str.split('').reverse().join('');
};

const findPalindromes = num => {
    let i = 0;
    while (i < 5) {
        const revNum = reverseNumber(num);
        num += revNum;
        i++;
        if (isPalindrome(num)) return num;
    }
    return num;
};

const n1 = 32;
const n2 = 39;

console.log(findPalindromes(n1));
console.log(findPalindromes(n2));