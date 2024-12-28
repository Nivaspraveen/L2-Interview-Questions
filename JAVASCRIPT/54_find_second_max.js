// 54. Find the second maximum among the given numbers.
// Ex.
// INPUT :
// Size of Array : 8
// Enter the elements : 2 5 1 6 2 6 7 10
// OUTPUT : 7
// Ex. 
// INPUT :
// Size of Array : 4
// Enter the elements : 4 1 2 2
// OUTPUT :2
// Ex. INPUT :
// Size of Array : 1
// Enter the elements : 1
// OUTPUT :No second maximum

const findSecondMax = (arr) => {
  if (arr.length < 2) {
    return "No second maximum";
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

let arr = [2, 5, 1, 6, 2, 6, 7, 10];
console.log(findSecondMax(arr));

arr = [4, 1, 2, 2];
console.log(findSecondMax(arr));

arr = [1];
console.log(findSecondMax(arr));
