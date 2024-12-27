// 22. It’s about anagram.i/p was array of stringsand a word was given to find whether it has anagram in given array.
// I/p catch, got, tiger, mat, eat, Pat, tap, tea
// Word: ate
// O/p eat, tea

const findAnagrams = (arr, word) => {
    const sortChars = str => str.toLowerCase().split('').sort().join('');
    const sortedWord = sortChars(word);
    return arr.filter(item => sortChars(item) === sortedWord);
}

let arr = ['catch', 'got', 'tiger', 'mat', 'eat', 'Pat', 'tap', 'tea'];
let word = 'ate';
console.log(findAnagrams(arr, word));
