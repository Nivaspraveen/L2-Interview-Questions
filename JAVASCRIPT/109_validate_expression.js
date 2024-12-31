// 109.
// Check whether a given mathematical expression is valid.
// Eg.) Input : (a+b)(a*b)
// Output : Valid
// Input : (ab)(ab+)
// Output : Invalid
// Input : ((a+b)
// Output : Invalid

const isValidExpression = expr => {
    let stack = [], operators = ['+', '-', '*', '/'], alphanumeric = /^[a-z0-9]+$/i;
    for (let i = 0; i < expr.length; i++) {
        let char = expr[i];
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) return 'Invalid';
            stack.pop();
        } else if (operators.includes(char)) {
            if (i === expr.length - 1 || !alphanumeric.test(expr[i + 1])) return 'Invalid';
        }
    }
    if (stack.length !== 0) return 'Invalid';
    return 'Valid';
}

console.log(isValidExpression('(a+b)(a*b)'));
console.log(isValidExpression('(ab)(ab+)'));
console.log(isValidExpression('((a+b)')) ;