// 19.
// Let 1 represent ‘A’, 2 represents ‘B’, etc.
// Given a digit sequence, count the number of possible decodings of the given digit sequence.
// Examples:
// Input: digits[] = “121”
// Output: 3
// // The possible decodings are “ABA”, “AU”, “LA”
// Input: digits[] = “1234”
// Output: 3
// // The possible decodings are “ABCD”, “LCD”, “AWD"

// Function to get the possible decodings
const getPossibleDecodings = (digits) => {
  let results = [];
  const decode = (current, remaining) => {
    if (remaining.length === 0) {
      results.push(current);
      return;
    }
    let oneDigit = parseInt(remaining.substring(0, 1), 10);
    if (oneDigit >= 1 && oneDigit <= 9)
      decode(
        current + String.fromCharCode(64 + oneDigit),
        remaining.substring(1)
      );

    if (remaining.length > 1) {
      let twoDigits = parseInt(remaining.substring(0, 2), 10);
      if (twoDigits >= 10 && twoDigits <= 26)
        decode(
          current + String.fromCharCode(64 + twoDigits),
          remaining.substring(2)
        );
    }
  };
  decode("", digits);
  return results;
};

// Example usage
let decodings1 = getPossibleDecodings("121");
console.log("Output: ", decodings1.length);
console.log(`Possible decodings for "121": ${decodings1.join(", ")}\n`);

let decodings2 = getPossibleDecodings("1234");
console.log("Output: ", decodings2.length);
console.log(`Possible decodings for "1234": ${decodings2.join(", ")}`);

// More tests

let decodings3 = getPossibleDecodings("1267981243");
console.log("Output: ", decodings3.length);
console.log(`Possible decodings for "1267981243": ${decodings3.join(", ")}\n`);