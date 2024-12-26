// 4.Given an array as input, The condition is if the number is repeated you must add thenumber and put the next index value to 0. 
// If the number is 0 print it at the last.

// Eg: arr[] = { 0, 2, 2, 2, 0, 6, 6, 0, 8}
// Output: 4 2 12 8 0 0 0 0 0 .

const modifyArray = arr => {
    let i = 0;
    while (i < arr.length - 1) {
        if (arr[i] !== 0 && arr[i] === arr[i + 1]) {
            arr[i] += arr[i + 1];
            arr[i + 1] = 0;
        }
        i++;
    }
    let nonZeroIdx = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) arr[nonZeroIdx++] = arr[j];  
    }
    while (nonZeroIdx < arr.length) arr[nonZeroIdx++] = 0;
    return arr;
};

// Test cases
console.log(modifyArray([0, 2, 2, 2, 0, 6, 6, 0, 8])); // Output: [4, 2, 12, 8, 0, 0, 0, 0, 0]
console.log(modifyArray([0, 0, 0, 0, 0, 0, 0, 0, 0])); // Output: [0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log(modifyArray([0, 2, 0, 2, 0, 0])); // Output: [4, 2, 0, 0, 0, 0]
