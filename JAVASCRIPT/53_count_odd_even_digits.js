// 53. Print the total number of odd and even digits in the given number.
// Ex.
// Input: 1234567
// Output :
//  ODD 4 
//  EVEN 3

const countOddEvenDigits = n => {
    let numStr = n.toString(), oddCount = 0, evenCount = 0;

    for (let digits of numStr) {
        let num = parseInt(digits, 10);
        num % 2 === 0 ? evenCount++ : oddCount++;
    }
    console.log(`ODD: ${oddCount}`);
    console.log(`EVEN: ${evenCount}`);
};

countOddEvenDigits(12345677240242404208028080282842n);
countOddEvenDigits(6572949274);
