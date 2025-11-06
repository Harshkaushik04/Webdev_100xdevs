const {Command}=require("commander");
const fs=require("fs/promises");

let program=new Command();

async function file_to_list(file_name){
    const data=await fs.readFile(file_name,'utf-8')
    let ans=JSON.parse(data);
    return ans;
}

async function write_to_file(file_name,llist){
    let string_data=JSON.stringify(llist);
    await fs.writeFile(file_name,string_data);
}

program.command('print').action(async ()=>{
    const llist=await file_to_list('file.json');
    let len=llist.length;
    for(let i=0;i<len;i++){
        console.log(`${llist[i].id}. ${llist[i].content}`);
    }
})

program.command('add').argument('<item>','item to be added').action(async (item)=>{
    const llist=await file_to_list('file.json');
    let len=llist.length;
    llist.push({
        "id":len+1,
        "content":item
    });
    await write_to_file('file.json',llist);
});

program.command('delete').argument('<item>','item to be deleted').action(async (item)=>{
    const llist=await file_to_list('file.json');
    let len=llist.length;
    let counter=0;
    for(let i=0;i<len;i++){
        if(counter==0){
            if(item==llist[i].content){
                llist.splice(i,1);
                counter++;
                continue;
            }
        }
        else if(counter!=0){
            if(item!=llist[i-counter].content) llist[i-counter].id-=counter;
            else{
                llist.splice(i-counter,1);
                counter++;
                continue;
            }
        }
    }
    await write_to_file('file.json',llist);
})

program.command('edit').argument('<item1>','item to be deleted').argument('<item2>','item to be added').action(async (delete_item,update_item)=>{
    const llist=await file_to_list('file.json');
    let len=llist.length;
    for(let i=0;i<len;i++){
        if(delete_item==llist[i].content){
            llist[i].content=update_item;
        }
    }
    await write_to_file('file.json',llist);
});

program.parse();
