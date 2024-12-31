// 99.
// Given two numbers a and b both < 200 we have to find the square numbers which liebetween a and b(inclusive)
// eg) 
// i/p a = 20;b = 100;
// o/p 25,36,49,64,81,100
// Alternately sort an unsorted array..
// eg) 
// i/p {5,2,8,7,4,3,9}
// o/p {9,2,8,3,7,4,5}

const findSquares = (a, b) => {
    let sqrs = [];
    for (let i = Math.ceil(Math.sqrt(a)); i <= Math.floor(Math.sqrt(b)); i++) sqrs.push(i * i);
    return sqrs;
};

let a = 20, b = 100;
console.log(findSquares(a, b));

const alternateSort = arr => {
    arr.sort((a, b) => a - b);
    let result = [], left = 0, right = arr.length - 1;
    while (left <= right) {
        if (right >= left) result.push(arr[right--]);
        if (left <= right) result.push(arr[left++]);
    }
    return result;
};

let arr = [5, 2, 8, 7, 4, 3, 9];
console.log(alternateSort(arr));