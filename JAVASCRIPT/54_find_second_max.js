// 54. Find the second maximum among the given numbers.
// Ex.
// INPUT :
// Size of Array : 8
// Enter the elements : 2 5 1 6 2 6 7 10
// OUTPUT : 7

const findSecondMax = (arr) => {
  if (arr.length < 2) {
    return "Array must have atleast two elements.";
  }
  let max = -Infinity,
    secondMax = -Infinity;
  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) secondMax = num;
  }
  return secondMax === -Infinity
    ? "No second maximum found (all elements might be equal)."
    : secondMax;
};

let arr = [2, 13, 9, 44, 1238, 567, 786];
console.log(findSecondMax(arr));

arr = [45, 112, 76, 32];
console.log(findSecondMax(arr));

arr = [];
console.log(findSecondMax(arr));
