// 42. Evaluate given expression which has factorials and exponential terms.

const factorial = n => {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
};

const power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) result *= base;
    return result;
};

const evaluateExpression = (expr, xvalue) => {
    // Replace factorial terms (e.g., 5!)
    expr = expr.replace(/(\d+)!/g, (_, n) => factorial(parseInt(n)));

    // Replace power terms (e.g., x^3)
    expr = expr.replace(/x\^(\d+)/g, (_, exp) => power(xvalue, parseInt(exp)));

    // Replace occurrences of x with its value
    expr = expr.replace(/x/g, xvalue);

    // Evaluate the final arithmetic expression
    let result = 0;
    let tokens = expr.match(/[-+]?(\d+(\.\d+)?|[*/])/g);
    if (tokens) {
        let stack = [], operators = [];
        for (let token of tokens) {
            if (!isNaN(token)) stack.push(Number(token));
            else if (['+', '-', '*', '/'].includes(token)) operators.push(token);
        }
        result = stack.reduce((a, b, i) => {
            let op = operators[i - 1] || '+';
            switch (op) {
                case '+': return a + b;
                case '-': return a - b;
                case '*': return a * b;
                case '/': return a / b;
            }
        });
    }
    return result;
};

// Example usage
let expr = "x^3 + 5! - 3", xvalue = 2;
console.log(evaluateExpression(expr, xvalue)); // Should output 125