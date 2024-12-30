// 83.
// Given an array, find the minimum of all the greater numbers for each element in thearray.
// Sample:
// Array : {2, 3, 7, 1, 8, 5, 11}
// Output:{2>3, 3>5, 7>8, 1>2, 8>11, 5>7, 11>}

const findMinGreaterNumbers = arr => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let minGreater = Infinity;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i] && arr[j] < minGreater) minGreater = arr[j];
        }
        result.push(`${arr[i]}>${minGreater === Infinity ? '' : minGreater}`);
    }
    return result;
};

const arr = [2, 3, 7, 1, 8, 5, 11];
console.log(findMinGreaterNumbers(arr).join(', '));