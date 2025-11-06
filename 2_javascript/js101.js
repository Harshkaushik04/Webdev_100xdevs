function myFunc(objects_arr){
    let size=objects_arr.length;
    let new_arr=[];
    for(let i=0;i<size;i++){
        if(objects_arr[i].age>18 && objects_arr[i].gender=="male"){
            new_arr.push(objects_arr[i].name);
        }
    }
    return new_arr;
}

let objects_arr=[{
    name:"harkirat",
    age:21,
    gender:"male"
},
{
    name:"harsh",
    age:20,
    gender:"male"
},
{
    name:"new_person",
    age:2,
    gender:"male"
},
{
    name:"new__new",
    age:20,
    gender:"female"
}]

console.log(myFunc(objects_arr));