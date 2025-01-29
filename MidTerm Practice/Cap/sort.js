function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b);

    return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7 (2 + 5)
console.log(sumTwoSmallestNumbers([10, 343, 45, 12, 1])); // 11 (1 + 10)

