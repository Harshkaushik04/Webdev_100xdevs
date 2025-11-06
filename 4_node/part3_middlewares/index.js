let express=require("express")

const app = express();

function isOldEnough(age){
    if(age>=14) return true;
    return false;
}

function isOldEnoughMiddleware(req,res,next){
    if(req.query.age>=14) next();
    else{
        res.json({
            "msg":"you arent old enough to get ride1"
        });
    }
}
app.use(isOldEnoughMiddleware);
// app.get("/ride1",(req,res)=>{
//     let age=req.query.age;
//     if(isOldEnough(age)){
//         res.json({
//             "msg":"you sucessfully had ride1"
//         });
//     }
//     else{
//         res.json({
//             "msg":"you arent old enough to get ride1"
//         });
//     }
// });

// app.get("/ride1",isOldEnoughMiddleware,(req,res)=>{
//     res.json({
//         "msg":"you sucessfully had ride1"
//     });
// });

app.get("/ride1",(req,res)=>{
    res.json({
        "msg":"you sucessfully had ride1"
    });
})

app.listen(3000);