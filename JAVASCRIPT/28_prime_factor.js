// 28. prime factor – sort the array based on the minimum factor they have.

const primeFactors = num => {
    if (num <= 1) return [];
    let factors = [];
    while (num % 2 === 0) {
        factors.push(2);
        num = num / 2;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        while (num % i === 0) {
            factors.push(i);
            num = num / i;
        }
    }
    if (num > 2) factors.push(num);
    return factors;
};

const minPrimeFactor = num => {
    let factors = primeFactors(num);
    return factors.length > 0 ? factors[0] : num;
};

const sortArrayByMinPrimeFactor = arr => arr.sort((a, b) => minPrimeFactor(a) - minPrimeFactor(b));

let arr = [30, 10, 12, 20, 15, 14, 8];
console.log(sortArrayByMinPrimeFactor(arr));

arr = [40, 10, 5, 12, 80, 1234];
console.log(sortArrayByMinPrimeFactor(arr));