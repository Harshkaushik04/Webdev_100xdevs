const fs = require("fs");

function read(err,content){
    console.log(content);
}

const contents = fs.readFile("a.txt", "utf-8",read); //asynchronously
const contents2 = fs.readFile("b.txt", "utf-8",read);