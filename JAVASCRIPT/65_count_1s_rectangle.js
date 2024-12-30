// 65. In a matrix find the number of rectangles filled with 1s.
// Input:
// 0 1 1 0
// 1 1 1 0
// 0 0 1 1
// 0 0 1 1
// Output: 2.

const countRectangles = (matrix) => {
  const rows = matrix.length,
    cols = matrix[0].length;
  let rectCount = 0;

  for (let r1 = 0; r1 < rows; r1++) {
    for (let c1 = 0; c1 < cols; c1++) {
      if (matrix[r1][c1] === 1) {
        for (let r2 = r1 + 1; r2 < rows; r2++) {
          for (let c2 = c1 + 1; c2 < cols; c2++) {
            let isFilled = true;
            for (let i = r1; i <= r2; i++) {
              for (let j = c1; j <= c2; j++) {
                if (matrix[i][j] !== 1) {
                  isFilled = false;
                  break;
                }
              }
              if (!isFilled) break;
            }
            if (isFilled) rectCount++;
          }
        }
      }
    }
  }
  return rectCount;
};

const matrix = [
  [0, 1, 1, 0],
  [1, 1, 1, 0],
  [0, 0, 1, 1],
  [0, 0, 1, 1],
];

console.log(countRectangles(matrix));
