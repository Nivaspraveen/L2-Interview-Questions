// 96.
// You’re given a number n. 
// If write all the numbers from 1 to n in a paper, we have to find the number of characters written on the paper.
// For example if n=13, the output should be 18 if n = 101, the output shouldbe 195

const countCharacters = n => {
    let totalChars = 0, length = 1, rangeStart = 1;
    while (rangeStart <= n) {
        let rangeEnd = Math.min(n, rangeStart * 10 - 1);
        let count = rangeEnd - rangeStart + 1;
        totalChars += count * length;
        rangeStart *= 10;
        length++;
    }
    return totalChars;
}

console.log(countCharacters(13));
console.log(countCharacters(101));
console.log(countCharacters(1221));