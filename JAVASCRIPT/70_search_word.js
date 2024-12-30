// 70. Write a program to check if the given words are present in matrix given below.
// Thewords can be left to right, top to bottom and the diagonals (in top to bottom direction)
// https://html.scribdassets.com/4xhvgtp37k6icxyb/images/17-af49feaadd.jpg

const searchWord = (matrix, word) => {
  const directions = [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
  ];
  const rows = matrix.length,
    cols = matrix[0].length;

  const isValid = (x, y, direction) => {
    let i = 0,
      j = 0;
    while (
      i < word.length &&
      x + i * direction.x < rows &&
      y + i * direction.y < cols
    ) {
      if (matrix[x + i * direction.x][y + i * direction.y] !== word[j])
        return false;
      i++;
      j++;
    }
    return j === word.length;
  };

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (matrix[x][y] === word[0]) {
        for (let dir of directions) {
          if (isValid(x, y, dir)) return true;
        }
      }
    }
  }
  return false;
};

const matrix = [
  ["P", "W", "K", "C", "T"],
  ["B", "O", "F", "A", "L"],
  ["O", "O", "E", "R", "M"],
  ["X", "L", "A", "T", "E"],
  ["A", "C", "O", "T", "N"],
];

const words = ["POET", "WOOL", "MOUSE", "CAMP", "ROAM"];

words.forEach((word) =>
  console.log(`${word}: ${searchWord(matrix, word) ? "Found" : "Not found"}`)
);
