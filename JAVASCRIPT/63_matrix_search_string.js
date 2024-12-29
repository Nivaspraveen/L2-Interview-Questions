// 63.Search a string in a given 2D matrix. And print its possible path.allowed movements are right left up and down.

const searchStringInMatrix = (matrix, word) => {
    const rows = matrix.length,
      cols = matrix[0].length;
  
    const directions = [
      { row: 0, col: 1, dir: "right" },
      { row: 0, col: -1, dir: "left" },
      { row: -1, col: 0, dir: "up" },
      { row: 1, col: 0, dir: "down" },
    ];
  
    const result = [];
  
    const dfs = (row, col, index, path) => {
      if (index === word.length) {
        result.push([...path]);
        return;
      }
  
      if (
        row < 0 ||
        col < 0 ||
        row >= rows ||
        col >= cols ||
        matrix[row][col] !== word[index]
      )
        return;
  
      const temp = matrix[row][col];
      matrix[row][col] = "#";
  
      for (const { row: dr, col: dc, dir } of directions) {
        dfs(row + dr, col + dc, index + 1, [...path, dir]);
      }
  
      matrix[row][col] = temp;
    };
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (matrix[row][col] === word[0]) dfs(row, col, 0, []);
      }
    }
  
    return result;
  };
  
  // Example usage
  const matrix = [
    ["a", "b", "c", "e"],
    ["s", "f", "c", "s"],
    ["a", "d", "e", "e"],
  ];
  
  const word = "see";
  const paths = searchStringInMatrix(matrix, word);
  
  console.log(`Paths for the word "${word}":`);
  paths.forEach((path, idx) =>
    console.log(`Path ${idx + 1}: ${path.join(" -> ")}`)
  );  
