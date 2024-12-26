// 7. Two strings of equal length will be given. Print all the adjacent pairs which are notequal.
// Input: asdfghij and adsfgijh
// Output: sd-ds, hij-ijh

const printAdjPairs = (s1, s2) => {
    let result = [];
    for (let i = 0; i < s1.length - 1; i++) {
        if (s1[i] !== s2[i]) result.push(s1[i] + s1[i + 1] + '-' + s2[i] + s2[i + 1]);
    }
    console.log(result.join(', '));
};

// Example Usage

printAdjPairs('asdfghij', 'adsfgijh');
printAdjPairs('abcdef', 'abzdef');