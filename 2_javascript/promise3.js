let fs=require("fs")

function promisifiedReadFile(filePath,encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,encoding,(err,content)=>{
            if(err){
                reject('Failure');
            }
            else{
                resolve(content);
            }
        })
    })
}

promisifiedReadFile("a.txt","utf-8").then((message)=>{
    console.log(message);
}).catch((error)=>
{
    console.log(error);
});

console.log("hi");
