function longestValidParentheses(str) {
    let count = 0;
    const parts = str.split("");

    for (let i = 0; i < parts.length - 1; i++) {
        if (parts[i] === "(" && parts[i + 1] === ")") {
            count += 2; 
            i++;  
        }
    }

    return count;
}

console.log(longestValidParentheses("(()("));   // 2
console.log(longestValidParentheses(")()())")); // 4
console.log(longestValidParentheses("()()"));   // 4
console.log(longestValidParentheses(""));       // 0


