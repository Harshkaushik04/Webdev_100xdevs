const express=require("express");
const cors=require("cors");
let app=express();
app.use(cors({
    domains:["http://localhost:40505"] //generated for fe.html using npx serve
}));

app.get("/sum",(req,res)=>{
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.json({
        "answer":a+b
    });
});
app.listen(3000);