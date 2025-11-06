let x=0;

function addToDo(){
    x++;
    let el=document.createElement("div");
    let str=document.querySelector("input").value;
    el.className=`todo-${x}`
    // el.style="display:flex;"
    el.innerHTML=`<span class="element-${x}" style="margin-right:10px">${x}. ${str}</span>
                <button class="element-${x}" onclick="deleteToDo(${x}) style="width:60px;height:20px;">Delete</button>`;
    let parent=document.querySelector(".all-todo");
    parent.appendChild(el);
}


function deleteToDo(y){
    const el=document.querySelector(".todo-"+String(y));
    el.parentNode.removeChild(el)
    console.log(`y+1:${y+1}`);
    console.log("x:"+x);
    updateNumbering(y);
    x--;
}