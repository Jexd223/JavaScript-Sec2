function reverseStr(value){
    let reversedValue = "";
    value.split("").forEach((chars) => {
        reversedValue = char + reversedValue;
    })
    return reversedValue;    
}
console.log(reverseStr("Reverse Me"));