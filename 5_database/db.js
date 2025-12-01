const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://collegestudent4278:4VPOpKePXJ5t4eAl@cluster0.jnjkk.mongodb.net/todo_db");
const ObjectId=mongoose.ObjectId;
const Schema=mongoose.Schema;

/*
users:name,email,password
todos:description,userID,done
*/

let user=new Schema({
            name:String,
            username:{type:String,unique:true},
            password:String
})

let todo=new Schema({
            description:String,
            done:Boolean,
            userID:ObjectId
})

let userModel=mongoose.model('users',user);
let todoModel=mongoose.model('todos',todo);

module.exports={
    userModel:userModel,
    todoModel:todoModel
};