// 38. Print only numbers which is present in Fibonacci series (0 1 1 2 3 5 8 ……..)
// Example:
// Input: 2 10 4 8
// Output: 2 8

// Input: 1 10 6 8 13 21
// Output: 1 8 13 21


const filterFibonacci = arr => {
    const generateFibonacci = max => {
        const fibSeries = [0, 1];
        while (true) {
            const nextFib = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
            if (nextFib > max) break;
            fibSeries.push(nextFib);
        }
        return new Set(fibSeries);
    };
    const maxInput = Math.max(...arr);
    const fibSet = generateFibonacci(maxInput);
    return arr.filter(num => fibSet.has(num));
}

// Example usage
const input1 = [2, 10, 4, 8];
const input2 = [1, 10, 6, 8, 13, 21];

console.log(filterFibonacci(input1)); // Output: [2, 8]
console.log(filterFibonacci(input2)); // Output: [1, 8, 13, 21]
