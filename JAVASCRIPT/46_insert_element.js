// 46. Insert an element at a particular index in an array.

const insertElement = (arr, index, element) => {
    if (index < 0 || index > arr.length) return 'Invalid index';
    arr.splice(index, 0, element);
    return arr;
};

let arr = [1, 2, 5, 10, 14, 98, 32];
let index = 4;
let element = 55;
console.log(insertElement(arr, index, element));