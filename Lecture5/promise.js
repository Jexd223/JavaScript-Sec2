function promiseYTimeout(ms){
    return new Promise((resolve , reject) => {
        setTimeout(resolve,ms);
    })
}

promiseYTimeout(2000).then(() =>{
    console.log("Done!!");
    return promiseYTimeout(1000);
})
.then(() =>{
    console.log("Also done!!");
    return Promise.resolve(42);
})
.then((result)=>{
    console.log(result);
})
.catch(() =>{
    console.log("Error!");
    
})