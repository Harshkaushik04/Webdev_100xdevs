const express=require("express");
const jwt=require("jsonwebtoken");
const mongoose=require("mongoose");
const {userModel,todoModel}=require("./db")
const cors=require("cors");
const JWT_SECRET_KEY="final_key";
// const ObjectId=mongoose.Types.ObjectId;
async function authMiddleware(req,res,next){
    let jwt_token=req.headers.token;
    try{
        const decodedData=jwt.verify(jwt_token,JWT_SECRET_KEY);
        req.token=jwt_token;
        req.userID=decodedData.userID;
        next();
    }
    catch(e){
        res.json({
            "msg":"user not authenticated"
        });
    }
}
/*
let user=new Schema({
            name:String,
            email:{type:String,unique:true},
            password:String
})

let todo=new Schema({
            description:String,
            done:Boolean,
            userID:ObjectId
})
*/
let app=express();
app.use(cors({
    "origin":"http://127.0.0.1:5500"
}));
app.use(express.json());
/*
req.body:{username,password}
*/
app.post("/sign-up",async (req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let name=req.body.name;
    const user=await userModel.findOne({
        username:username
    });
    if(user){
        return res.json({"msg":"duplicate entry"});
    }
    else{
        await userModel.create({
            username:username,
            password:password,
            name:name
        });
        return res.json({"redirect":"http://127.0.0.1:5500/5_database/public/login.html"});
    }
});
app.post("/login",async (req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    const user=await userModel.findOne({
        username:username,
        password:password
    });
    if(user){
        let jwt_token=jwt.sign({
            userID:user._id
        },JWT_SECRET_KEY);
        res.json({
            "redirect":"http://127.0.0.1:5500/5_database/public/todos.html",
            "userID":user._id,
            "token":jwt_token
        })
    }
    else{
        res.json({"msg":"invalid credentials"});
    }
});

app.post("/create-todo",authMiddleware,async (req,res)=>{
    //request includes the todo in req.body.todo
    let todo=req.body.todo;
    await todoModel.create({
        description:todo,
        done:false,
        userID:req.userID
    })
    res.json({msg:"todo created"});
});
app.get("/todos",authMiddleware,async (req,res)=>{
    // find todos from todoModel using userID 
    let todos=await todoModel.find({
        userID:req.userID
    });
    let user=await userModel.findOne({
        _id:req.userID
    });
    // console.log(req.userID);
    // console.log(todos);
    res.json({
        username:user.username,
        todos:todos
    });
});

app.post("/auth",(req,res)=>{
    let jwt_token=req.headers.token;
    try{
        jwt.verify(jwt_token,JWT_SECRET_KEY);
        res.json({msg:"authenticated"});
    }
    catch(e){
        res.json({
            "msg":"user not authenticated"
        });
    }
})
app.listen(3000);

