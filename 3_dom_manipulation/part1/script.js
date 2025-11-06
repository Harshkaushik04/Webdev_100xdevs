let x=0

function updateNumbering(y){ //deleted y numbered => update from y+1 to x
    for(let i=y+1;i<=x;i++){
        let el=document.querySelector(".todo-"+String(i));
        let initialString=el.childNodes[0].innerHTML;
        let str="";
        let ans="";
        let len=initialString.length;
        for(let i=0;i<len;i++){
            if(initialString[i]=='.'){
                str=initialString.slice(i);
                break;
            }
            ans+=initialString[i];
        }
        let z=Number(ans);
        console.log(`i:${i},z:${z},str:${str}`);
        z--;
        el.childNodes[0].innerHTML=String(z)+str;
        el.childNodes[1].onclick=()=>deleteToDo(Number(el.childNodes[0].innerHTML[0]));
        el.className="todo-"+String(z);
    }
}

function addToDo(){
    x++;
    const inp=document.querySelector("input");
    console.log(inp.value);
    let middle_child=document.createElement("div");
    let child1=document.createElement("b");
    let child2=document.createElement("button");
    child2.innerHTML="Delete";
    child1.innerHTML=String(x) +". " +inp.value;
    child2.onclick=()=>deleteToDo(Number(child1.innerHTML[0]));
    middle_child.appendChild(child1);
    middle_child.appendChild(child2);
    middle_child.className="todo-"+String(x);
    let parent=document.querySelector(".all-todo");
    parent.appendChild(middle_child);
    inp.value="";
}

function deleteToDo(y){
    const el=document.querySelector(".todo-"+String(y));
    el.parentNode.removeChild(el)
    console.log(`y+1:${y+1}`);
    console.log("x:"+x);
    updateNumbering(y);
    x--;
}

// console.log(document.querySelectorAll("b")[2].innerHTML);
// const interest=document.querySelector("input")
// console.log(interest);
// while(true){
//     setTimeout(1);

// }

// let x=0;
// function callback(){
//     x++;
//     console.log(x);
//     const el=document.querySelectorAll("b")[2];
//     el.innerHTML=x;
// }
// setInterval(callback,1000);