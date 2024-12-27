// 32. Check if a number ‘a’ is present in another number ‘b.

const isNumberPresent = (a, b) => {
    while (b > 0) {
        let t = b, match = true;
        for (let x = a; x > 0; x = Math.floor(x / 10)) {
            if (t % 10 !== x % 10) {
                match = false;
                break;
            }
            t = Math.floor(t / 10);
        }
        if (match) return true;
        b = Math.floor(b / 10);
    }
    return false;
};

// Example Usage
console.log(isNumberPresent(124, 3124));
console.log(isNumberPresent(23, 56));