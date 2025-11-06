const express=require("express")

let users=[
    {
        name:"john",
        kidney:[{
            healthy:false
        }]
    }
];

let app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    let num_healthy=0;
    for(let item of users[0].kidney){
        if(item.healthy) num_healthy++;
    }
    let num_kidneys=users[0].kidney.length;
    res.json({
        "num_kidneys":num_kidneys,
        "num_healthy":num_healthy
    });
})

app.post("/",(req,res)=>{ 
    let health=req.body.health;
    users[0].kidney.push({healthy:health});
    res.json({
        "message recieved":true
    });
})

app.put("/",(req,res)=>{
    let userKidneys=users[0].kidney;
    let isOneKidneyHealthy=false;
    for(let item of userKidneys){
        if(item.healthy) isOneKidneyHealthy=true;
        item.healthy=true;
    }
    if(isOneKidneyHealthy) res.status(500).json({});
    else res.json({});
})

app.delete("/",(req,res)=>{
    users[0].kidney=[];
    res.json({});
})

app.listen(3000);