function SwapNumber(num) {
    let Result = []; 

    let current = num;
    Result.push(current);

    for (let i = 1; i < num.length; i++) {
        current = current.slice(1) + current[0];
        Result.push(current); 
    }
    console.log(Result); 
}

SwapNumber('1234');


