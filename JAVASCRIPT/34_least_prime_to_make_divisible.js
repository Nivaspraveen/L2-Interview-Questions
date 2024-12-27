// 34. Find the least prime number that can be added with first array element that makesthem divisible by second array elements at respective index (check for prime numbersunder 1000, 
//     if exist return -1 as answer) & (Consider 1 as prime number)
// Input : [ 20, 7 ][ 11, 5 ]
// Output : [ 1, 3 ]
// Explanation :(20 + ?) % 11 
// ( 7 + ?) % 5

const isPrime = num => {
    if (num <= 1) return num === 1;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
};

const findLeastPrime = (arr1, arr2) => {
    const primes = [1];
    for (let i = 2; i < 1000; i++) {
        if (isPrime(i)) primes.push(i);
    }
   return arr1.map((num1, idx) => {
        const divisor = arr2[idx];
        for (let prime of primes) {
            if ((num1 + prime) % divisor === 0) return prime;
        }
        return -1;
    });
};

console.log(findLeastPrime([20, 7], [11, 5]));
console.log(findLeastPrime([11, 67], [20, 4]));