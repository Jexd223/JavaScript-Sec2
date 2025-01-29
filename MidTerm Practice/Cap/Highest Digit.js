function highestDigit(number) {
    const digits = number.toString().split('');
    const maxDigit = Math.max(...digits.map(Number));
    return maxDigit;
}

console.log(highestDigit(34857));     // 8
console.log(highestDigit(9241));     //9
console.log(highestDigit(12345));   // 5



