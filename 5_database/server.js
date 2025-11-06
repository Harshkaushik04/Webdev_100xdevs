const express=require("express");
const jwt=require("jsonwebtoken");

function authMiddleware(req,res,next){
    
}

let app=express();
app.use(express.json());
/*
req:{username,password}
*/
app.post("sign-up",(req,res)=>{

});
app.post("login",(req,res)=>{});
app.post("todo",(req,res)=>{});
app.get("todos",(req,res)=>{});

