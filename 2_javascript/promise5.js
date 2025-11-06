let fs=require("fs");

function cleanFilePromisified(filePath){
    return new Promise((resolve,reject)=>{
        cleanFile(filePath);
        resolve('Success');
    });
}

cleanFilePromisified("a.txt").then((message)=>{
    console.log(message);
});