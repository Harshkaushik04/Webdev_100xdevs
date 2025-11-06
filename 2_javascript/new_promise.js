let p=new Promise((resolve,reject)=>{
    let a=1+1;
    if(a==2){
        resolve("Success");
    }
    else{
        reject("Failure");
    }
});

p.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
}); // .then() and .catch() callback are async so even though promise has been resolved it runs later
console.log(p);
console.log("hi");