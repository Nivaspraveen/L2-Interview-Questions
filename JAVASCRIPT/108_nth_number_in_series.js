// 108.
// Form a number system with only 3 and 4. Find the nth number of the number system.Eg.) The numbers are: 3, 4, 33, 34, 43, 44, 333, 334, 343, 344, 433, 434, 443, 444, 3333,
// 3334, 3343, 3344, 3433, 3434, 3443, 3444 ….
 
const findNthNumber = n => {
    let queue = ['3', '4'], count = 0
    while (queue.length > 0) {
        let curr = queue.shift();
        count++;
        if (curr === n) return curr;
        queue.push(curr + '3');
        queue.push(curr + '4');
    }
};

console.log(findNthNumber(20));
console.log(findNthNumber(5));