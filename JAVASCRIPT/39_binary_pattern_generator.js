// 39. Print pattern like this
// Example:Input: 1Output: 0

// Input: 2
// Output:
// 0 0
// 0 1
// 1 0
// 1 1

// Input: 3
// Output:
// 0 0 0
// 0 0 1
// 0 1 0
// 0 1 1
// 1 0 0
// 1 0 1
// 1 1 0
// 1 1 1

const generateBinaryPattern = n => {
    const limit = 2 ** n;
    if (n === 1) {
        console.log('0');
        return;
    }
    for (let i = 0; i < limit; i++) {
        const binaryStr = i.toString(2).padStart(n, '0');
        console.log(binaryStr.split('').join(' '));
    }
};

generateBinaryPattern(1);
console.log('\n');
generateBinaryPattern(2);
console.log('\n');
generateBinaryPattern(3);