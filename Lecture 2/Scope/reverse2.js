function reverseStr(value){
    const reversedValue = value.split('').reverse().join('')
    return reversedValue;
}
console.log(reverseStr("Hello JavaScript"))