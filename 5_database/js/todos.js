async function hitUrl(){
    let response=await axios.get("http://localhost:3000/todos",
        {
            headers:{token:localStorage.getItem("token"),
                userID:localStorage.getItem("userID")
            }
        }
    )
    if(response.data.msg=="user not authenticated") window.location.href="http://127.0.0.1:5500/5_database/public/login.html";
    else{
        let textPortion=document.querySelector(".text");
        textPortion.innerHTML=`<div>Hi there ${response.data.username}</div>`;
        let len=response.data.todos.length;
        for(let i=0;i<len;i++){
            let item=document.createElement("div");
            item.className=`todo-${i+1}`;
            item.textContent=`${i+1}. ${response.data.todos[i].description},done:${response.data.todos[i].done}`;
            textPortion.appendChild(item);
        }
    }
}

function signOut(){
    localStorage.removeItem("token");
    window.location.href="http://127.0.0.1:5500/5_database/public/login.html";
}

function creating_todo(){
    window.location.href="http://127.0.0.1:5500/5_database/public/create_todo.html";
}

hitUrl(); 