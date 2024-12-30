// 86.
// Given a 2D grid of characters, you have to search for all the words in a dictionary by moving only along two directions, either right or down. 
// Print the word if it occurs.
// Sample :
// a z o l
// n x h o
// v y i v
// o r s e
// Dictionary = {van, zoho, love, are, is}
// Output:
// zoho
// love
// Is

const findWordsInGrid = (grid, dictionary) => {
    const rows = grid.length, cols = grid[0].length;

    const searchWord = (row, col, direction) => {
        let word = '', r = row, c = col;
        while (r < rows && c < cols) {
            word += grid[r][c];
            if (dictionary.includes(word)) console.log(word);
            if (direction === 'right') c++;
            else r++;
        }
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            searchWord(i, j, 'right');
            searchWord(i, j, 'down');
        }
    }
};

const grid = [
    ['a', 'z', 'o', 'l'],
    ['n', 'x', 'h', 'o'],
    ['v', 'y', 'i', 'v'],
    ['o', 'r', 's', 'e']
];
const dictionary = ['van', 'zoho', 'love', 'are', 'is'];

findWordsInGrid(grid, dictionary);