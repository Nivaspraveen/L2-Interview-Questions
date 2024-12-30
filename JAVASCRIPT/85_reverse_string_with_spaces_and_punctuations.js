// 85.
// Given a string, we have to reverse the string without changing the position ofpunctuations and spaces.
// Sample: house no : 123@ cbe
// Output: ebc32 1o : nes@ uoh

const reverseStringWithSpacesAndPunctuations = str => {
    let chars = [];
    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z0-9]/.test(str[i])) chars.push(str[i]);
    }

    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z0-9]/.test(str[i])) result += chars.pop();
        else result += str[i];
    }
    return result;
}

let str = 'house no : 123@ cbe';
console.log(reverseStringWithSpacesAndPunctuations(str));