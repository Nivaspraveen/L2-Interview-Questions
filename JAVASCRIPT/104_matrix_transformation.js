// 104. Given two matrices a and b both of size NxN find if matrix a can be transformed tomatrix b by rotating it 90deg , 180deg , 270deg if so print TRUE else print FALSE

const rotateMatrix = matrix => {
    const n = matrix.length;
    let rotated = Array.from({ length: n}, () => []);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) rotated[j][n - 1 - i] = matrix[i][j];
    }
    return rotated;
};

const matricesAreEqual = (m1, m2) => {
    const n = m1.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (m1[i][j] !== m2[i][j]) return false;
        }
    }
    return true;
};

const canTransformByRotation = (a, b) => {
    if (matricesAreEqual(a, b)) {
        console.log("TRUE");
        return;
    }

    // Rotation 90°
    let rotated90 = rotateMatrix(a);
    if (matricesAreEqual(rotated90, b)) {
        console.log("TRUE");
        return;
    }

    // Rotation 180°
    let rotated180 = rotateMatrix(rotated90);
    if (matricesAreEqual(rotated180, b)) {
        console.log("TRUE");
        return;
    }

    // Rotation 270°
    let rotated270 = rotateMatrix(rotated180);
    if (matricesAreEqual(rotated270, b)) {
        console.log("TRUE");
        return;
    }

    // If no rotation results in the same matrix
    console.log("FALSE");
};

const a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const b = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
];

canTransformByRotation(a, b);  // Output: TRUE

const c = [
    [9, 6, 3],
    [8, 5, 2],
    [7, 4, 1]
];

canTransformByRotation(a, c);  // Output: TRUE

const d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 10]
];

canTransformByRotation(a, d);  // Output: FALSE