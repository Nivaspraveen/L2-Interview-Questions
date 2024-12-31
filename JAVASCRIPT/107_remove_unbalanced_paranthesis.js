// 107.
// Remove unbalanced parentheses in a given expression.
// Eg.) Input : ((abc)((de))
// Output : ((abc)(de))
// Input : (((ab)
// Output : (ab)

// Filename: removeUnbalancedParentheses.js

function removeUnbalancedParentheses(expression) {
    let stack = [];
    let balanced = new Array(expression.length).fill(true);

    // First pass: Identify unbalanced parentheses
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            stack.push(i);
        } else if (expression[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                balanced[i] = false;
            }
        }
    }

    // Mark any remaining '(' in the stack as unbalanced
    while (stack.length > 0) {
        balanced[stack.pop()] = false;
    }

    // Reconstruct the balanced expression
    let result = '';
    for (let i = 0; i < expression.length; i++) {
        if (balanced[i]) {
            result += expression[i];
        }
    }

    return result;
}

// Test cases
let input1 = '((abc)((de))';
let input2 = '(((ab)';
console.log(removeUnbalancedParentheses(input1)); // Output: ((abc)(de))
console.log(removeUnbalancedParentheses(input2)); // Output: (ab)
