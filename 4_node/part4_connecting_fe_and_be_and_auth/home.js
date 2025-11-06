async function hitUrl(){
    console.log("hi");
    let response=await axios.get("http://localhost:3000/",
        {
            headers:{"token":localStorage.getItem("token")}
        }
    )
    if(!response.data.msg) window.location.href=response.data.redirect;
}

function signOut(){
    localStorage.removeItem("token");
    window.location.href="http://127.0.0.1:5500/4_node/part5_jwt/sign_in.html"
}

hitUrl(); 