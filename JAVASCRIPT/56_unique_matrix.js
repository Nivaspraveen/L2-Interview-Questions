// 56. Given a two dimensional array which consists of only 0’s and 1’s. 
// Print the matrix without duplication. 
// Ex. 
// INPUT :
// Enter Row Size : 4
// Enter column size : 3
// Enter the matrix : 
// 1 0 1 
// 1 1 0 
// 1 1 1 
// 1 0 1 
// OUTPUT :
// Unique Matrix :
//  1 0 1 
//  1 1 0 
//  1 1 1

const removeDuplicates = matrix => {
    let uniqueMatrix = [], seenRows = new Set();
    for (let row of matrix) {
        let rowStr = row.join(',');
        if (!seenRows.has(rowStr)) {
            uniqueMatrix.push(row);
            seenRows.add(rowStr);
        }
    }
    return uniqueMatrix;
};

let matrix = [
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 1],
    [1, 0, 1]
];

let uniqueMatrix = removeDuplicates(matrix);
console.log('Unique Matrix:\n');
uniqueMatrix.forEach(row => console.log(row.join(' ')));