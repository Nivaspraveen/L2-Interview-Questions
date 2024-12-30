// 82.
// sort numbers based on digits starting from most significant numbers. 
// Eg: 
// input-100 1 11 21 2 3. 
// Output-1 100 11 2 21 3

const sortByDigits = arr => {
    return arr.sort((a, b) => {
        const strA = a.toString(), strB = b.toString();
        for (let i = 0; i < Math.max(strA.length, strB.length); i++) {
            const charA = strA[i] || "", charB = strB[i] || "";
            if (charA !== charB) return charA.localeCompare(charB);
        }
        return 0;
    });
};

const arr = [100, 1, 11, 21, 2, 3];
console.log(sortByDigits(arr).join(' '));
