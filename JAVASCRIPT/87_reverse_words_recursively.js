// 87.
// Given a string, change the order of words in the string (last string should come first).
// Should use RECURSION
// Sample: one two three
// Output : three two one

const reverseWords = str => {
    if (str.trim().indexOf(" ") === -1) return str;
    const words = str.split(' '),
        firstWord = words[0],
        restOfStr = words.slice(1).join(' ');
    return reverseWords(restOfStr) + ' ' + firstWord;
};

const str = 'one two three'
console.log(reverseWords(str));