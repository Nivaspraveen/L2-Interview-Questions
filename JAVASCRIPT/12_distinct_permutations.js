// 12. Print all distinct permutations of a given string with duplicate characters. 
// Examples: 
// Input : ABCA 
// Output : AABC AACB ABAC ABCA ACBA ACAB BAAC BACA BCAA CABA CAAB CBAA

const permuteUnique = str => {
    const result = [],
        sortedStr = str.split('').sort().join(''),
        used = Array(sortedStr.length).fill(false);
    
    const backtrack = path => {
        if (path.length === sortedStr.length) {
            result.push(path.join(''));
            return;
        }
        for (let i = 0; i < sortedStr.length; i++) {
            if (used[i] || (i > 0 && sortedStr[i] === sortedStr[i - 1] && !used[i - 1])) continue;
            used[i] = true;
            path.push(sortedStr[i]);
            backtrack(path);
            path.pop();
            used[i] = false;
        }
    };
    backtrack([]);
    return result;
};

let input = "ABCA";
console.log(permuteUnique(input));