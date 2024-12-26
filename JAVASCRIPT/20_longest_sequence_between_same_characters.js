// Print longest sequence between same character
// Ex 
// I/p abcccccbba
// O/p 8 (from a to a)

// I/p aaaaaaaa
// O/p 6

const longestSequenceBetweenSameCharacters = s => {
    let maxLength = -1, charIndexMap = new Map();
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (charIndexMap.has(ch)) {
            let length = i - charIndexMap.get(ch) - 1;
            if (length > maxLength) maxLength = length;
        }
        else charIndexMap.set(ch, i);
    }
    return maxLength;
};

let s1 = "abcccccbba", s2 = "aaaaaaaa";
console.log(longestSequenceBetweenSameCharacters(s1));
console.log(longestSequenceBetweenSameCharacters(s2));