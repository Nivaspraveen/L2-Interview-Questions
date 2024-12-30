// 67.
// Write a program to determine whether a given number can be expressed as sum oftwo prime numbers or not.
// For example 34 can be expressed as sum of two prime numbers but 23 cannot be.

const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
};

const canBeSumOfTwoPrimes = n => {
    for (let i = 2; i <= n / 2; i++) {
        if (isPrime(i) && isPrime(n - i)) return true;
    }
    return false;
};

const n1 = 34;
const n2 = 23;
console.log(canBeSumOfTwoPrimes(n1));
console.log(canBeSumOfTwoPrimes(n2));