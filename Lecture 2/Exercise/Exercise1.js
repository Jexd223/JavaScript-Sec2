function findPerimeter(length, width) {
    if (Number.isNaN(Number.parseFloat(length)) || Number.isNaN(Number.parseFloat(width))) {
        return 0;
    }
    return 2 * (parseFloat(length) + parseFloat(width));
}

console.log(findPerimeter("10, 32")); // Correct output: 84
