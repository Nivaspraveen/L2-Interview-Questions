// 105. In addition to the above question you have to check if matrix a can be transformed bymirroring vertically or horizontally to matrix b.

// Function to rotate matrix by 90 degrees clockwise
const rotateMatrix = matrix => {
    const n = matrix.length;
    let rotated = Array.from({ length: n }, () => []);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) rotated[j][n - 1 - i] = matrix[i][j];
    }
    return rotated;
};

// Function to check if two matrices are equal
const matricesAreEqual = (m1, m2) => {
    const n = m1.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (m1[i][j] !== m2[i][j]) return false;
        }
    }
    return true;
};

// Function to mirror the matrix horizontally (flip top to bottom)
const mirrorHorizontally = matrix => {
    const n = matrix.length;
    let mirrored = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
        mirrored[i] = matrix[n - 1 - i];
    }
    return mirrored;
};

// Function to mirror the matrix vertically (flip left to right)
const mirrorVertically = matrix => {
    const n = matrix.length;
    let mirrored = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
        mirrored[i] = matrix[i].reverse();
    }
    return mirrored;
};

// Main function to check if matrix 'a' can be transformed into 'b' by rotation or mirroring
const canTransform = (a, b) => {
    // Check if original matrix a is equal to matrix b
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

    // Mirror horizontally
    let mirroredHorizontally = mirrorHorizontally(a);
    if (matricesAreEqual(mirroredHorizontally, b)) {
        console.log("TRUE");
        return;
    }

    // Mirror vertically
    let mirroredVertically = mirrorVertically(a);
    if (matricesAreEqual(mirroredVertically, b)) {
        console.log("TRUE");
        return;
    }

    // If no transformation results in the same matrix
    console.log("FALSE");
};

// Example usage:

// Case 1: Matrix a can be transformed to matrix b by rotating 90 degrees.
const a1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const b1 = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
];
canTransform(a1, b1);  // Output: TRUE (90 degrees rotation)

// Case 2: Matrix a can be transformed to matrix b by horizontal mirroring.
const a2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const b2 = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3]
];
canTransform(a2, b2);  // Output: TRUE (Horizontal mirroring)

// Case 3: Matrix a cannot be transformed into matrix b by any rotation or mirroring.
const a3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const b3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 10]
];
canTransform(a3, b3);  // Output: FALSE
