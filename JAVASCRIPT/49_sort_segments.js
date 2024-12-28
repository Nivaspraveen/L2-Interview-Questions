// 49. Sort parts of an array separately using peak values.

// Function to find peak values in an array
const findPeaks = arr => {
    let peaks = [];
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) peaks.push(i);
    }
    return peaks;
};

// Function to sort segments of the array
const sortSegments = arr => {
    if (arr.length === 0) return 0;
    let peaks = findPeaks(arr), start = 0;
    for (let i = 0; i <= peaks.length; i++) {
        let end = (i < peaks.length) ? peaks[i] + 1 : arr.length;
        let segment = arr.slice(start, end);
        segment.sort((a, b) => a - b);
        for (let j = start; j < end; j++) arr[j] = segment[j - start];
        start = end;
    }
    return arr;
};

// Test array
let arr = [12, 3, 4, 15, 77, 10, 83, 8];
console.log(sortSegments(arr));

arr = []
console.log(sortSegments(arr));

arr = [2, 3, 1, 5, 9, 6, 5];
console.log(sortSegments(arr));
