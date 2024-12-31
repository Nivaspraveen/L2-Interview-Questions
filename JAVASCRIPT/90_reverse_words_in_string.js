// Given a string str, the task is to reverse the order of the words in the given string. Note that str may contain leading or trailing dots(.) or multiple trailing dots(.) between two words. The returned string should only have a single dot(.) separating the words.

// Examples:

// Input: str = “i.like.this.program.very.much” 
// Output: str = “much.very.program.this.like.i” 


// Input: str = ”..geeks..for.geeks.” 
// Output: str = “geeks.for.geeks”

const reverseWords = str => {
    const words = str.split('.');
    const filteredWords = words.filter(word => word.length > 0);
    const reversedWords = filteredWords.reverse();
    return reversedWords.join('.');
};

console.log(reverseWords('i.like.this.program.very.much'));
console.log(reverseWords('..geeks..for.geeks.'));