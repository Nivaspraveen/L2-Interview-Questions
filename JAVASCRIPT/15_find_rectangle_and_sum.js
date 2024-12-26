// 15. Given two dimensional matrix of integer and print the rectangle can be formed usinggiven indices and also find the sum of the elements in the rectangle
// Input: mat[M][N] = {{1, 2, 3, 4, 6}, {5, 3, 8, 1, 2}, {4, 6, 7, 5, 5}, {2, 4, 8, 9, 4} };
// index = (2, 0) and (3, 4)
// Output:
// Rectangle 
// 4 6 7 5 5 
// 2 4 8 9 4 sum 54

const findRectangleAndSum = (matrix, topLeft, bottomRight) => {
    let [x1, y1] = topLeft, [x2, y2] = bottomRight;
    let rect = [], sum = 0;

    for (let i = x1; i <= x2; i++) {
        let row = [];
        for (let j = y1; j <= y2; j++) {
            row.push(matrix[i][j]);
            sum += matrix[i][j];
        }
        rect.push(row);
    }
    return {rect, sum};
}

let matrix = [
    [1, 2, 3, 4, 6],
    [5, 3, 8, 1, 2],
    [4, 6, 7, 5, 5],
    [2, 4, 8, 9, 4]
];
let topLeft = [2, 0], bottomRight = [3, 4];
let {rect, sum} = findRectangleAndSum(matrix, topLeft, bottomRight);
console.log("Rectangle:");
rect.forEach(r => console.log(r.join(' ')));
console.log("Sum:", sum);