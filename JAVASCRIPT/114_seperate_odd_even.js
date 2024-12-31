// 114.
// Write a program to sort the elements in odd positions in descending order andelements in ascending order
// Eg 1: Input: 13,2 4,15,12,10,5Output: 13,2,12,10,5,15,4Eg 2: Input: 1,2,3,4,5,6,7,8,9Output: 9,2,7,4,5,6,3,8,1

const sortOddEvenPositions = arr => {
    let oddPos = [], evenPos = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) oddPos.push(arr[i]);
        else evenPos.push(arr[i]);
    }
    oddPos.sort((a, b) => b - a);
    evenPos.sort((a, b) => a - b);

    let result = [], oddIndex = 0, evenIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) result.push(oddPos[oddIndex++]);
        else result.push(evenPos[evenIndex++]);
    }
    return result;
};

// Example usage:
console.log(sortOddEvenPositions([13, 2, 4, 15, 12, 10, 5])); // Output: [13, 2, 12, 10, 5, 15, 4]
console.log(sortOddEvenPositions([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: [9, 2, 7, 4, 5, 6, 3, 8, 1]
