// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

function setTimeOutPromisified(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time);
    });
}

setTimeOutPromisified(1000).then(()=>{
    console.log("hi");
    setTimeOutPromisified(3000).then(()=>{
        console.log("hello");
        setTimeOutPromisified(5000).then(()=>{
            console.log("hello there");
        })
    })
})

//better syntax: promise chaining
setTimeOutPromisified(1000).then(()=>{
    console.log("hi");
    return setTimeOutPromisified(3000);
}).then(()=>{
    console.log("hello");
    return setTimeOutPromisified(5000);
}).then(()=>{
    console.log("hello there");
});