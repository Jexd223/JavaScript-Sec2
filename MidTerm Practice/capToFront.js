function capToFront(word) {
    // แยกตัวอักษรพิมพ์ใหญ่และพิมพ์เล็ก
    const uppercase = word.split('').filter(char => char === char.toUpperCase());
    const lowercase = word.split('').filter(char => char === char.toLowerCase());
    // นำตัวพิมพ์ใหญ่มาไว้ด้านหน้าและตามด้วยตัวพิมพ์เล็ก
    return uppercase.join('') + lowercase.join('');
}

console.log(capToFront("haPpy"));    // Output: "PPhay"
console.log(capToFront("moveMENT")); // Output: "MENTmove"
console.log(capToFront("shOrtCAKE")); // Output: "OCAKEshrt"
