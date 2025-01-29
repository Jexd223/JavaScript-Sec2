function frequencySort(text) {
    const charCount = {};
    for (let char of text) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    const sortedChars = [];
    for (let char in charCount) {
        sortedChars.push({ char: char, freq: charCount[char] });
    }

    sortedChars.sort((a, b) => {
        if (b.freq !== a.freq) {
            return b.freq - a.freq;
        }
        if (a.char.toLowerCase() === b.char.toLowerCase()) {
            return a.char < b.char ? -1 : 1;
        }
        return a.char.toLowerCase() < b.char.toLowerCase() ? -1 : 1;
    });

    return sortedChars.map(item => item.char.repeat(item.freq)).join('');
}

// ตัวอย่างการใช้งาน
console.log(frequencySort("tree"));      // eert
console.log(frequencySort("cccaaa"));   // aaaccc
console.log(frequencySort("Aabb"));    // bbAa



