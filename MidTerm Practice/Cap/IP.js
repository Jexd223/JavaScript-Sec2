function checkIP(IP) {
    check = true;
    arrIP = IP.split(".")

    // Check 4 parameter
    if (arrIP.length === 4){
        for (params of arrIP){
            // Check number is 1-3 digit 
            if (params.toString().length >= 1 && params.toString().length <= 3){
                // Check start with 0
                if (params.length > 1 && params.startsWith("0"))
                    check = false

                // Check value is 0-255
                if (params < 0 || params > 255)
                    check = false
            }else
                check = false
        }
    }
    else {
        check = false
    }

    return check
}

console.log(checkIP("1.2.3.4")); // true
console.log(checkIP("1.2.3"));  // false
console.log(checkIP("1.2.3.4.5"));  // false
console.log(checkIP("123.45.67.89")); // true
console.log(checkIP("123.456.78.90")); // false
console.log(checkIP("123.045.067.089")); // false


