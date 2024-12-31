// 91.
// Write a program to rotate an n*n matrix 90,180,270,360 degree.
// https://www.geeksforgeeks.org/inplace-rotate-square-matrix-by-90-degrees/  is the solution for rotating a matrix 90 degree. 
// For rotating the matrix 180,270,360 degree, u need to callthe same method 2,3,4 times based on the input.

const rotate90 = matrix => {
    const n = matrix.length;
    for (let x = 0; x < Math.floor(n / 2); x++) {
        for (let y = x; y < n - x - 1; y++) {
            let temp = matrix[x][y];
            matrix[x][y] = matrix[y][n - 1 - x];
            matrix[y][n - 1 - x] = matrix[n - 1 - x][n - 1 - y];
            matrix[n - 1 - x][n - 1 - y] = matrix[n - 1 - y][x];
            matrix[n - 1 - y][x] = temp;
        }
    }
};

const rotateMatrix = (matrix, degrees) => {
    const times = (degrees / 90) % 4;
    for (let i = 0; i < times; i++) rotate90(matrix);
    return matrix;
};

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log('Original matrix:');
console.table(matrix);

let rotated90 = rotateMatrix(JSON.parse(JSON.stringify(matrix)), 90);
console.log('Rotated 90 degrees:');
console.table(rotated90);

let rotated180 = rotateMatrix(JSON.parse(JSON.stringify(matrix)), 180);
console.log('Rotated 180 degrees:');
console.table(rotated180);

let rotated270 = rotateMatrix(JSON.parse(JSON.stringify(matrix)), 270);
console.log('Rotated 270 degrees:');
console.table(rotated270);

let rotated360 = rotateMatrix(JSON.parse(JSON.stringify(matrix)), 360);
console.log('Rotated 360 degrees:');
console.table(rotated360);

matrix = [
    [1,  2,  3,  4],
    [5,  6,  7,  8], 
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log('Original matrix:');
console.table(matrix);

rotated90 = rotateMatrix(JSON.parse(JSON.stringify(matrix)), 90);
console.log('Rotated 90 degrees:');
console.table(rotated90);

rotated180 = rotateMatrix(JSON.parse(JSON.stringify(matrix)), 180);
console.log('Rotated 180 degrees:');
console.table(rotated180);

rotated270 = rotateMatrix(JSON.parse(JSON.stringify(matrix)), 270);
console.log('Rotated 270 degrees:');
console.table(rotated270);

rotated360 = rotateMatrix(JSON.parse(JSON.stringify(matrix)), 360);
console.log('Rotated 360 degrees:');
console.table(rotated360);