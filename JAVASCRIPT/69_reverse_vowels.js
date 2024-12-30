// 69.
// Given a string, reverse only vowels in it; leaving rest of the string as it is.
// Input : abcdef
// Output : ebcdaf

const reverseVowels = str => {
    const vowels = 'aeiouAEIOU', arr = str.split('');
    let i = 0, j = str.length - 1;

    while (i < j) {
        while (i < j && !vowels.includes(arr[i])) i++;
        while (i < j && !vowels.includes(arr[j])) j--;
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return arr.join('');
}

let str = 'abcdef';
console.log(reverseVowels(str));

str = 'zoho corporation';
console.log(reverseVowels(str));