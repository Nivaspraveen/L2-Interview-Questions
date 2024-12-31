// 95. You’re given an even number n. 
// If n=4, you have to print the following pattern : 
// 4444 
// 4334 
// 4334 
// 4444 

// If n=6, then the pattern should be like this : 
// 666666 
// 655556 
// 654456 
// 654456 
// 655556 
// 666666

const printPattern = n => {
    let pattern = [];
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            let min = Math.min(i, j, n - 1 - i, n - 1 - j);
            row += (n - min).toString();
        }
        pattern.push(row);
    }
    return pattern.join('\n');
};

let n = 4;
console.log(printPattern(n) + '\n');

n = 6;
console.log(printPattern(n) + '\n');

n = 9;
console.log(printPattern(n));