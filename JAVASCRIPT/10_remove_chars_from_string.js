// 10. Given two Strings s1 and s2, remove all the characters from s1 which is present in s2.
// Input: s1=”expErIence”, s2=”En”
// Output: s1=”exprIece”
 
const removeChars = (s1, s2) => {
    let result = '';
    for (let i = 0; i < s1.length; i++) {
        if (!s2.includes(s1[i])) result += s1[i];
    }
    return result;
};

// Example Usage
console.log(removeChars('expErIence', "En"));