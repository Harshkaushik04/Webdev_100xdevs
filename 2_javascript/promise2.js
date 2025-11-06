function random(resolve){
    resolve();
}

function main(){
    console.log("hi");
}

let= p=new Promise(random);
p.then(main); //main runs after resolve has been called