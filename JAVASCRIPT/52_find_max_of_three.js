// 52. Find the maximum of three numbers?

const findMax = (a, b, c) => (a > b ? (a > c ? a : c) : b > c ? b : c);

console.log(findMax(10, 20, 4));
console.log(findMax(21, 12, 33));
console.log(findMax(3, 1, 4));