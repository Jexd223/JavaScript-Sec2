function criticalCode(){
    throw "throwing an exception";
}

function logError(theException){
    console.log(theException);
}

//try Catch
console.log("\n******** Try...Catch ********\n");

try{
    criticalCode();
} catch(ex){
    console.log("Got an Error");
    logError(ex);
} 

//Throwing in Try...Catch
console.log("\n******** Throwing Try...Catch ********\n")

try{
    throw "an Exception that is thrown every time";
}catch(ex){
    console.log("Got an error");
    logError(ex);
}

//try Catch finally
console.log("\n******** Try...Catch...Finally ********\n")

try{
    criticalCode();
}catch(ex){
    console.log("Got an error");
    logError(ex);
} finally{
    console.log("Code that always will run");    
}

function hello(){
    console.log("\n******** Throwing Exceptions ********\n");
}