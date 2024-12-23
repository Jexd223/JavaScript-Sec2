const ArrayOfNumber = [1,2,3,4];

const sum = ArrayOfNumber.reduce((accumulator,currenValue)=>{
    return accumulator + currenValue;
});

console.log(sum);