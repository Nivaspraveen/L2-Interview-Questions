// 59.
// Given an array of numbers. Print the numbers without duplication.
// INPUT :
// Enter the array size : 4
// Enter the elements : 1 1 2 4
// OUTPUT :
// 1 2 4

const findDuplicates = arr => {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) uniqueArr.push(arr[i]);
    }
    return uniqueArr;
};

let arr = [1, 1, 2, 4];
console.log(findDuplicates(arr).join(' '));

arr = [4, 3, 56, 3, 12, 4, 12, 33, 5, 2, 3];
console.log(findDuplicates(arr).join(' '));