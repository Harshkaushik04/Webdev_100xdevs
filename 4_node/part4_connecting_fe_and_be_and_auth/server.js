const express=require("express");
const cors=require("cors");
let app=express();

let users=[];
function check(req,res){
    let token=req.headers.token;
    for(let item of users){
        if(item.token==token) return {"status":"authorised"};
    }
    return {"status":"unauthorised"};
}

function token_generator() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

app.use(express.json());
app.use(cors({
    "origin":"http://127.0.0.1:5500"
}));
app.get("/",(req,res)=>{
    //user is authorised
    console.log("hit '/' url")
    if(check(req,res).status=="authorised"){
        res.json({
            "msg":"remain here"
        });
    }
    //unauthorised=>first send to sign-up page
    else{
        res.json({
            "redirect":"http://127.0.0.1:5500/4_node/part5_jwt/sign_up.html"
        });
    }
})

app.post("/sign-up",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    for(let item of users){
        if(item.username==username){
            return res.json({"msg":"username already taken"});
        }
    }
    //username not taken=>make new id
    users.push({
        "username":username,
        "password":password
    });
    res.json({
        "resp":"http://127.0.0.1:5500/4_node/part5_jwt/sign_in.html"
    })
})

app.post("/sign-in",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    for(let item of users){
        if(item.username==username && item.password==password){
            item.token=token_generator();
            return res.json({
                "token":item.token,
                "resp":"http://127.0.0.1:5500/4_node/part5_jwt/home.html"
            })
        }
    }
    return res.json({"msg":"credentials dont match!"});
})

app.post("/me",(req,res)=>{
    res.json(users);
    console.log(users);
})

app.listen(3000);