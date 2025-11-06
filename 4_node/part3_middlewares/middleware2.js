let express=require("express");
const app=express();

function loggerMiddleware(req,res,next){
    console.log(req);
    next();
}
app.use(loggerMiddleware);

app.get("/sum",(req,res)=>{
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.json({
        "ans":a+b
    });
})

app.get("/subtract",(req,res)=>{
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.json({
        "ans":a-b
    });
})

app.get("/multiply",(req,res)=>{
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.json({
        "ans":a*b
    });
})

app.get("/divide",(req,res)=>{
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.json({
        "ans":a/b
    });
})

app.listen(3000);