function countString(input, type) {
    //check input is message
    if (typeof input !== "string") {
        throw new TypeError("Input must be a string.");
    }

    switch (type.toLowerCase()) {
        case 'w':
            return input.trim().split(/\s+/).length; //trimตัดช่องว่างแล้วนับ
        case 'v':
            const vowelMatches = input.match(/[aeiou]/gi);
            return vowelMatches ? vowelMatches.length : 0;
        case 'c':
            return input.split("").filter((char) => char !== " ").length; //splitแต่ละตัวแล้วใช้filterเอาช่องว่างออกไป
        default:
            throw new Error("Invalid type. Use 'w', 'v', or 'c'."); 
    }
}

// Example usage
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8

module.exports = countString;
