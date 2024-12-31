// 98.
// You’re given a string as an input. 
// You have to reverse the string by keeping the punctuation and spaces. 
// You have to modify the source string itself with creating an anotherstring.
// Input :
// A man, in the boat says : I see 1-2-3 in the sky
 
// Output :
//  y kse, ht ni3 21ee slsy : a sta o-b-e ht nin amA

const reverseStringwithPunctuation = str => {
    let char = str.split('');
    let left = 0, right = char.length - 1;
    while (left < right) {
        if (!isAlphaNumeric(char[left])) left++;
        else if (!isAlphaNumeric(char[right])) right--;
        else {
            [char[left], char[right]] = [char[right], char[left]];
            left++;
            right--;
        }
    }
    return char.join('');
};

const isAlphaNumeric = char => /^[a-z0-9]+$/i.test(char);

let str = "A man, in the boat says : I see 1-2-3 in the sky"
console.log(reverseStringwithPunctuation(str));