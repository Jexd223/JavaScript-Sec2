function totalVolume(...boxes) {
    let total = 0; 
    for (let i = 0; i < boxes.length; i++) {
        let result = 1 ; 
        for (let j = 0; j < boxes[i].length; j++) {
            result *= boxes[i][j];
        }
        total += result;
    }
    return total;
}

console.log(totalVolume([2, 2, 2], [2, 1, 1],[2, 2, 2]));
