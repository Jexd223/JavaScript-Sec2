function highestDigit(number) {
    const digits = number.toString().split('');
    const maxDigit = Math.max(...digits.map(Number));
    return maxDigit;
}

console.log(highestDigit(34857));
console.log(highestDigit(9241));
console.log(highestDigit(12345));5
