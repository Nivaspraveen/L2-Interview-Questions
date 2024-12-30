// 81. Given an array of positive integers. The output should be the number of occurrences ofeach number.
// Example:
// Input: {2, 3, 2, 6, 1, 6, 2}
// Output:
// 1 – 1
// 2 – 3
// 3 – 1
// 6 – 2

const countOccurences = (arr) => {
  const occurrences = new Map();
  for (const num of arr) occurrences.set(num, (occurrences.get(num) || 0) + 1);
  Array.from(occurrences.keys())
    .sort((a, b) => a - b)
    .forEach((key) => console.log(`${key} - ${occurrences.get(key)}`));
};

const arr = [2, 3, 2, 6, 1, 6, 2];
countOccurences(arr);
