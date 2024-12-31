// 115.
// Write a program to give the following output for the given input
// Eg 1: Input: a1b10Output: abbbbbbbbbbEg: 2: Input: b3c6d15Output: bbbccccccdddddddddddddddThe number varies from 1 to 99.
const expandCharacters = str => {
    let result = '', i = 0;
    while (i < str.length) {
        let char = str[i];
        i++;
        let num = '';
        while (i < str.length && !isNaN(str[i])) {
            num += str[i];
            i++;
        }
        result += char.repeat(Number(num));
    }
    return result;
};

console.log(expandCharacters('a1b10'));
console.log(expandCharacters('b3c6d15'));
console.log(expandCharacters('a1b2c3d4'));