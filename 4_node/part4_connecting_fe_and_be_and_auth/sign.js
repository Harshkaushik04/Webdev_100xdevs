function signInClick(){
    window.location.href="http://127.0.0.1:5500/4_node/part5_jwt/sign_in.html";
}
async function submited_sign_up(username,password){
    let response=await axios.post("http://localhost:3000/sign-up",
        {
            "username":username,
            "password":password
        }
    );
    if(response.data.msg=="username already taken"){
        document.querySelector(".error").innerHTML="Username already taken!";
    }
    else window.location.href=response.data.resp;
}

async function submited_sign_in(username,password){
    let response=await axios.post("http://localhost:3000/sign-in",
        {
            "username":username,
            "password":password
        }
    );
    if(response.data.msg=="credentials dont match!"){
        document.querySelector(".error").innerHTML="credentials dont match!";
    }
    else{
        localStorage.setItem("token",response.data.token);
        window.location.href=response.data.resp;
    }
}

function goBackToSignUp(){
    window.location.href="http://127.0.0.1:5500/4_node/part5_jwt/sign_up.html"
}