// 21.sort the array odd numbers in ascending and even numbers in descending.
// I/p 5 8 11 6 2 1 7
// O/p 1 5 7 11 8 6 2

const sortArray = arr => {
    let oddNums = [], evenNums = [];
    for (let num of arr)  (num % 2 === 0) ? evenNums.push(num) : oddNums.push(num);
    oddNums.sort((a, b) => a - b);
    evenNums.sort((a, b) => b - a);
    return oddNums.concat(evenNums); 
}

let arr = [5, 8, 11, 6, 2, 1, 7];
console.log(sortArray(arr));