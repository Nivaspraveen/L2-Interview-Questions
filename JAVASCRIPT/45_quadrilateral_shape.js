// 45. Given four points, We have to say whether it is square or rectangle or any other shape

const distance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

const determineShape = points => {
    if (points.length !== 4) return 'Invalid input. Exactly 4 points are required.';

    const [A, B, C, D] = points;
    const d1 = distance(A[0], A[1], B[0], B[1]);
    const d2 = distance(B[0], B[1], C[0], C[1]); 
    const d3 = distance(C[0], C[1], D[0], D[1]); 
    const d4 = distance(D[0], D[1], A[0], A[1]);
    const diag1 = distance(A[0], A[1], C[0], C[1]); 
    const diag2 = distance(B[0], B[1], D[0], D[1]);

    if (d1 === d2 && d2 === d3 && d3 === d4 && diag1 === diag2) return "Square";

    if (d1 === d3 && d2 === d4 && diag1 === diag2) return "Rectangle";

    return "Other Shape";
};

let points = [
    [0, 0],
    [0, 2],
    [2, 2],
    [2, 0]
];
console.log(determineShape(points));

points = [
    [0, 0],
    [0, 2],
    [3, 2],
    [3, 0]
]

console.log(determineShape(points));

points = [
    [0, 0],
    [0, 5],
    [5, 8],
    [8, 0]
]

console.log(determineShape(points));

points = [
    [0, 0],
    [0, 7],
    [7, 11],
    [11, 19],
    [19, 0]
];
console.log(determineShape(points));
