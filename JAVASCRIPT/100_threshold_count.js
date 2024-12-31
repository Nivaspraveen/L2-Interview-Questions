// 100. Given an array and a threshold value find the o/p
// eg) 
// i/p {5,8,10,13,6,2};
// threshold = 3;
// o/p count = 17
// explanation:
// Number      parts           counts
// 5           {3,2}           2
// 8           {3,3,2}         3
// 10          {3,3,3,1}       4
// 13          {3,3,3,3,1}     5
// 6           {3,3}           2
// 2           {2}             1

const thresholdCount = (arr, threshold) => {
    let count = 0;
    arr.forEach(num => {
        count += Math.ceil(num / threshold);
    });
    return count;
};

let arr = [5, 8, 10, 13, 6, 2];
let threshold = 3;
console.log('Count:', thresholdCount(arr, threshold));