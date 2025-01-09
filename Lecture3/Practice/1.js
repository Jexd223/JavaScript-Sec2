let values1 = ['Apple', 1 , false];
let values2 = ['Fries', 2 , true,'Mars'];
let values3 = ['Mars', 9 , 'Apple'];
let values4 = ['Mars',2] 

let commonElement = [];
let newValues = values1.concat(values2,values3,values4);

for (let i = 0; i < newValues.length; i++) {
    for (let j = i + 1; j < newValues.length; j++) {
        if (newValues[i] === newValues[j] && !commonElement.includes(newValues[i])) {
            commonElement.push(newValues[i]);
        }
    }
}

console.log("Common Element : " + commonElement);