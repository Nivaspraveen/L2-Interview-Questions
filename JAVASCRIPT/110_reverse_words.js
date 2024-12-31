// 110.
// Using Recursion reverse the string such as
// Eg 1: Input: one two threeOutput: three two oneEg 2: Input: I love indiaOutput: india love I

const reverseWordRecursively = words => {
    if (words.length === 0) return '';
    let lastWord = words.pop();
    return lastWord + (words.length > 0 ? ' ' : '') + reverseWordRecursively(words);
};

const reverseString = str => {
    let words = str.split(' ');
    return reverseWordRecursively(words);
};

console.log(reverseString('one two three'));
console.log(reverseString('I love India'));