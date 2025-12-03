import express from "express"
import cors from "cors"
import jsonwebtoken from "jsonwebtoken"
import mongoose from "mongoose"
import {userModel,noteModel,maxIndexModel} from "./db.js"
import 'dotenv/config';


let app=express();
const JWT_SECRET_KEY=process.env.JWT_SECRET_KEY;
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json());

function authMiddleware(req,res,next){
    let jwt_token=req.headers.token;
    try{
        let decodedData=jsonwebtoken.verify(jwt_token,JWT_SECRET_KEY);
        req.token=jwt_token;
        req.username=decodedData.username;
        next();
    }
    catch(err){
        res.json({
            validUser:false
        });
    }
}

app.post("/api/signup",async (req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let user=await userModel.findOne({
        username:username
    });
    if(user){
        console.log(`SIGNUP PAGE:user with username ${username} is already inside database`)
        res.json({
            alreadyUser:true
        });
    }
    else{
        console.log(`SIGNUP PAGE:user with username ${username} and password ${password} signed up`)
        await userModel.create({
            username:username,
            password:password
        })
        await maxIndexModel.create({
            username:username,
            index:0
        })
        res.json({
            alreadyUser:false
        });
    }
})

app.post("/api/login",async (req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let user=await userModel.findOne({
        username:username,
        password:password
    })
    if(user){
        console.log(`LOGIN PAGE:user with username ${username} and password ${password} loged in`)
        const jwt_token=jsonwebtoken.sign({
            username:username
        },JWT_SECRET_KEY);
        res.json({
            validUser:true,
            token:jwt_token
        })
    }
    else{
        console.log(`LOGIN PAGE:user with username ${username} and password ${password} failed to log in`)
        res.json({
            validUser:false
        })
    }
})

app.get("/api/get-titles",authMiddleware,async(req,res)=>{
    let username=req.username;
    const titles=await noteModel.find({
        username:username
    },{index:1,title:1,_id:0});
    res.json({
        validUser:true,
        titles:titles.map((n)=>[n.index,n.title])
    });
})

app.post("/api/submit-note",authMiddleware,async (req,res)=>{
    let username=req.username;
    let title=req.body.title;
    let description=req.body.description;
    let entry=await maxIndexModel.findOne({
        username:username
    });
    if(!entry){
        maxIndexModel.create({
            username:username,
            index:0
        });
        entry=await maxIndexModel.findOne({
        username:username
    });
    }

    await maxIndexModel.findOneAndUpdate({
        username:username
    },{
        $inc:{index:1}
    },{new:true});
    await noteModel.create({
        username:username,
        title:title,
        description:description,
        index:entry.index
    })
    res.json({
        validUser:true
    });
})

app.get("/api/get-description",authMiddleware,async(req,res)=>{
    let username=req.username;
    let index=req.query.index;
    const foundData=await noteModel.findOne({
        username:username,
        index:index
    });
    res.json({
        validUser:true,
        description:foundData.description
    })
})

app.post("/api/update-note",authMiddleware,async(req,res)=>{
    let username=req.username;
    let index=req.body.index;
    let description=req.body.description;
    await noteModel.findOneAndUpdate({
        username:username,
        index:index
    },{
        $set:{
            description:description
        }
    },{new:true});
    res.json({
        validUser:true
    })
    
})

app.delete("/api/delete-note",authMiddleware,async (req,res)=>{
    let username=req.username;
    let index=req.query.index;
    await noteModel.findOneAndDelete({
        username:username,
        index:index
    })
    res.json({
        validUser:true
    })
})

app.listen(3000,()=>{console.log("server running at port 3000")});