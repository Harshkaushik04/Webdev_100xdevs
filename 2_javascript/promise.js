function setTimeOutPromisified(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time);
    }); 
}

function run(){
    console.log("hi");
}

setTimeOutPromisified(3000).then(run); // run runs after resolve has been called

/*
function(resolve){
    return setTimeout(resolve,time);
}
is equivalent to:
resolve=>setTimeout(resolve,time);
*/