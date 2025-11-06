const {Command}=require("commander");
const fs=require("fs");

let program=new Command();
program.command('count').argument('<file>','enter file name').action((file)=>{
    fs.readFile(file,'utf-8',(error,data)=>{
        if(error){
            console.log('error encountered!');
        }
        else{
            const num=data.split('\n').length;
            console.log(`number of lines is ${num}`);
        }
    });
});
program.parse();
