function removeDups(arr){
    let ArrDups = [];
    for (let i = 0; i < arr.length; i++) {
        let isDups = false;
        for (let j = 0; j < ArrDups.length; j++) {
            if (arr[i] === ArrDups[j] ) {
                isDups =true;
                break;
            }
        }
        if(!isDups){
            ArrDups.push(arr[i]);
        }
    }
    return ArrDups;
}

console.log(removeDups(["The","Cat" ,"Dog" ,"Cat"]));
