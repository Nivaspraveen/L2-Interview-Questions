// 5. Print the given input string in ‘X’ format.
// Note: The string length will be of odd length

const printXPattern = pattern => {
    const n = pattern.length;
    const result = Array.from({ length: n }, () => Array(n).fill(' '));
    for (let i = 0; i < n; i++) {
        result[i][i] = pattern[i]; 
        result[i][n - i - 1] = pattern[i];
    }
    result.forEach(row => console.log(row.join('')));
};

const inputs = [
    "Programming", "program", "ABCDEPQRSTZ", "ZOHO Corporation"
];

inputs.forEach(input => {
    console.log(`Input: ${input}`);
    printXPattern(input);
    console.log("\n*************************************\n");
})