const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(`Accumulator: ${accumulator}, CurrentValue: ${currentValue}, Index: ${index}, Return: ${returns}`);
    return returns;
}

array.reduce(reducer);