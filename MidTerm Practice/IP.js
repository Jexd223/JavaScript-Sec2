function isValidIP(str) {
    const parts = str.split(".");
    if (parts.length !== 4) {
    return false;
    }
    for (let part of parts) {
        if (!/^\d+$/.test(part) || (part.length > 1 && part.startsWith("0"))) {
            return false;
        }
        const num = Number(part);
        if (num < 0 || num > 255) {
            return false;
        }
    }
    return true;
}
  // Example usage:
console.log(isValidIP("1.2.3.4")); 
console.log(isValidIP("1.2.3")); 
console.log(isValidIP("1.2.3.4.5")); 
console.log(isValidIP("123.45.67.89")); 
console.log(isValidIP("255.255.255.255")); 
console.log(isValidIP("0.0.0.0")); 