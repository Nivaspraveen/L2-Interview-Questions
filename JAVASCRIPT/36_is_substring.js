// 36. Print true if second string is a substring of first string, else print false.
// Note : * symbol can replace n number of characters

// Input : Spoon Sp*n 
// Output : TRUE

// Input: Zoho *o*o 
// Output : TRUE 

// Input: Man n* 
// Output : FALSE

// Input: Subline line
// Output : TRUE

const isSubstring = (first, second) => {
    const regexStr = second.replace(/[*]/g, '.*');
    const regex = new RegExp(`^${regexStr}$`);
    return regex.test(first);
};

// Test cases
const input1 = ["Spoon", "Sp*n"];
const input2 = ["Zoho", "*o*o"];
const input3 = ["Man", "n*"];
const input4 = ["Subline", "line"];

console.log(isSubstring(input1[0], input1[1]));
console.log(isSubstring(input2[0], input2[1]));
console.log(isSubstring(input3[0], input3[1]));
console.log(isSubstring(input4[0], input4[1]));