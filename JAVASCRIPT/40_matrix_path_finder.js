// 40. NxN matrix will be provided. 0->block, 1->Not a blockAlways starting point is (0,0), Ending point is (N-1,N-1).
// You have to go from starting point to ending point. One valid solution is enough.
// Example:
// Input:N=4
// 1 1 0 0
// 1 0 0 1
// 1 1 1 1
// 0 0 0 1
// Output:
// _ 1 0 0
// _ 0 0 1
// _ _ _ _
// 0 0 0 _

const findPath = matrix => {
    const N = matrix.length;
    const path = Array.from({ length: N }, () => Array(N).fill(0));
    
    const isSafe = (x, y) =>  x >= 0 && x < N && y >= 0 && y < N && matrix[x][y] === 1;

    const solveMaze = (x, y) => {
        if (x === N - 1 && y === N - 1 && matrix[x][y] === 1) {
            path[x][y] = 1;
            return true;
        }
        if (isSafe(x, y)) {
            path[x][y] = 1;
            if (solveMaze(x + 1, y)) return true;
            if (solveMaze(x, y + 1)) return true;
            path[x][y] = 0;
            return false;
        }
        return false;
    }

    if (!solveMaze(0, 0)) console.log("No path found");
    else {
        for (let i = 0; i < N; i++) {
            let row = '';
            for (let j = 0; j < N; j++) {
                (path[i][j] === 1) ? row += '_ ' : row += matrix[i][j] + ' ';
            }
            console.log(row.trim());
        }
    }
}

// Example usage
const matrix = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 1]
];
findPath(matrix);
