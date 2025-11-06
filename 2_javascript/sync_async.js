function setTimeOutPromisified(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time);
    })
}

// alternate syntax for promise chaining using .then()
//use promisified function with await to get real effect
async function solve(){
    await setTimeOutPromisified(1000);
    console.log("hi");
    await setTimeOutPromisified(3000);
    console.log("hello");
    await setTimeOutPromisified(5000);
    console.log("hello there");
}
solve();
console.log("after solve function");