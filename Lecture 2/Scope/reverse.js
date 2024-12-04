function reverseStr(value){
    let reversedValue = "";
    value.split("").forEach((chars) => {
        reversedValue = chars + reversedValue;
    })
    return reversedValue;    
}
console.log(reverseStr("Reverse Me"));