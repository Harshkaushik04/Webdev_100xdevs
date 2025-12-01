async function create_todo(){
    let todo=document.querySelector(".create-to-do-input").value;
    //add to todoModel via backend, go to /todos on frontend
    let response=await axios.post("http://localhost:3000/create-todo",{
            todo:todo
    },{
        headers:{
            token:localStorage.getItem("token")
        }
    });
    //assuming message in case of failure to redirect to login.html or redirection to create_todo.html in case of success
    if(response.data.msg=="user not authenticated"){
        window.location.href="http://127.0.0.1:5500/5_database/public/login.html"
    }
    else{
        window.location.href="http://127.0.0.1:5500/5_database/public/todos.html"
    }
}

async function hitUrl(){
    let response=await axios.post("http://localhost:3000/auth",{},{
        headers:{
            token:localStorage.getItem("token")
        }
    });
    //assuming message in case of failure to redirect to login.html or redirection to create_todo.html in case of success
    if(response.data.msg=="user not authenticated"){
        window.location.href="http://127.0.0.1:5500/5_database/public/login.html"
    }
}

hitUrl();