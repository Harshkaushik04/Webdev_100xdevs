function signInClick(){
    window.location.href="http://127.0.0.1:5500/5_database/public/login.html";
}
async function submited_sign_up(name,username,password){
    let response=await axios.post("http://localhost:3000/sign-up",
        {
            "username":username,
            "password":password,
            "name":name
        }
    );
    if(response.data.msg=="duplicate entry"){
        document.querySelector(".error").innerHTML="Username already taken!";
    }
    else window.location.href=response.data.redirect;
}

async function submited_sign_in(username,password){
    let response=await axios.post("http://localhost:3000/login",
        {
            "username":username,
            "password":password
        }
    );
    if(response.data.msg=="invalid credentials"){
        document.querySelector(".error").innerHTML="credentials dont match!";
    }
    else{
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("userID",response.data.userID);
        window.location.href=response.data.redirect;
    }
}

function goBackToSignUp(){
    window.location.href="http://127.0.0.1:5500/5_database/public/sign_up.html"
}