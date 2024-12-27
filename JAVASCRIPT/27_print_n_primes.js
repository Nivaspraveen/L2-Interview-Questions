// 27. prime number – print n prime numbers28. prime factor
 
const isPrime = n => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

const printNPrimes = n => {
    let count = 0, num = 2, primes = [];
    while (count < n) {
        if (isPrime(num)) {
            primes.push(num);
            count++;
        }
        num++;
    }
    return primes;
};

let n = 10;
console.log(printNPrimes(n));

n = 45;
console.log(printNPrimes(n));