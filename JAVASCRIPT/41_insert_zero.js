// 41. Insert 0 after consecutive (K times) of 1 is found.
// Example:
// Input: Number of bits: 12 
// Bits: 1 0 1 1 0 1 1 0 1 1 1 1
// Consecutive K: 2
// Output:1 0 1 1 0 0 1 1 0 0 1 1 0 1 1 0

const insertZeroAfterKConsecutiveOnes = (bits, k) => {
    const result = [];
    let count = 0;
    for (let i = 0; i < bits.length; i++) {
        result.push(bits[i]);
        if (bits[i] === 1) {
            count++;
            if (count === k) {
                result.push(0);
                count = 0;
            }
        } else count = 0;
    }
    return result;
};

const bits = [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
const k = 2;
console.log(insertZeroAfterKConsecutiveOnes(bits, k));