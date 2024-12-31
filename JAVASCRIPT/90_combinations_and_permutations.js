// 90. Write a program to print all permutations of a given string. 
// Note here you need to takeall combinations as well, say for the input ABC the output should be as follows: 
// Input: ABC 
// Output: 
// A 
// B C 
// AB AC BA BC CA CB 
// ABC ACB BCA BAC CBA CAB

const getCombinations = str => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i],
            remChars = str.slice(0, i) + str.slice(i + 1),
            subCombinations = getCombinations(remChars);
        result.push(char);
        for (let j = 0; j < subCombinations.length; j++) result.push(char + subCombinations[j]);
    }
    return result;
};

const getPermutations = str => {
    let result = [];
    const permute = (arr, memo) => {
        let curr;
        memo = memo || [];
        for (let i = 0; i < arr.length; i++) {
            curr = arr.splice(i, 1);
            if (arr.length === 0) result.push(memo.concat(curr).join(''));
            permute(arr.slice(), memo.concat(curr));
            arr.splice(i, 0, curr[0]);
        }
        return result;
    };
    return permute(str.split(''));
};

const printCombinationsAndPermutations = input => {
    let combinations = getCombinations(input);
    let uniqueCombinations = [...new Set(combinations)];
    let combinationsResult = uniqueCombinations.filter(c => c.length === 1).join('\n') + '\n';

    combinationsResult += uniqueCombinations.filter(c => c.length === 2).join(' ') + '\n';
    combinationsResult += uniqueCombinations.filter(c => c.length === 3).join(' ');
    console.log(combinationsResult);

    let permutations = getPermutations(input);
    console.log(permutations.join(' '));
};

let str = 'ABC';
printCombinationsAndPermutations(str);

str = 'ABCD';
printCombinationsAndPermutations(str);