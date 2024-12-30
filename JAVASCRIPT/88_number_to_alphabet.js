// 88.
// Given a number, convert it into corresponding alphabet.

// Input   Output 
// 1       A
// 26      Z
// 27      AA
// 676     ZZZ 

const numberToAlphabet = num => {
    let result = '';
    while (num > 0) {
        let rem = (num - 1) % 26;
        result = String.fromCharCode(65 + rem) + result;
        num = Math.floor((num - 1) / 26);
    }
    return result;
};

const numbers = [1, 26, 27, 676, 1120, 53, 11, 89];
numbers.forEach(num => console.log(`${num} -> ${numberToAlphabet(num)}`));
