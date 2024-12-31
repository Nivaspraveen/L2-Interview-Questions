// 103.
// Given bigger NxN matrix and a smaller MxM matrix print TRUE if the smaller matrix canbe found in the bigger matrix else print FALSE

const isSubmatrixPresent = (bigMatrix, smallMatrix) => {
    const n = bigMatrix.length, m = smallMatrix.length;

    for (let i = 0; i <= n - m; i++) {
        for (let j = 0; j <= n - m; j++) {
            let matchFound = true;
            for (let x = 0; x < m; x++) {
                for (let y = 0; y < m; y++) {
                    if (bigMatrix[i + x][j + y] !== smallMatrix[x][y]) {
                        matchFound = false;
                        break;
                    }
                }
                if (!matchFound) break;
            }
            if (matchFound) {
                console.log("TRUE");
                return;
            }
        }
    }
    console.log("FALSE");
}

let bigMatrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let smallMatrix = [
    [7, 9],
    [10, 11]
];

isSubmatrixPresent(bigMatrix, smallMatrix);

bigMatrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

smallMatrix = [
    [2, 3, 4],
    [6, 7, 8]
];

isSubmatrixPresent(bigMatrix, smallMatrix);