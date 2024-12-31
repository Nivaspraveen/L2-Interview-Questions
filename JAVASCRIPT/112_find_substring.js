// 112.
// Find if a String2 is substring of String1. If it is, return the index of the first occurrence.else return -1.
// Eg 1:
// Input:
// String 1: test123stringString 
// 2: 123
// Output: 4
// Eg 2: 
// Input:
// String 1: testing12String 
// 2: 1234
// Output: -1

const findSubstring = (s1, s2) => s1.indexOf(s2);

let s1 = 'test123string', s2 = '123';
console.log(findSubstring(s1, s2));

s1 = 'testing12', s2 = '1234';
console.log(findSubstring(s1, s2));