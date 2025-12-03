import mongoose from "mongoose";
import 'dotenv/config';
mongoose.connect(process.env.MONGO_URL)

const Schema=mongoose.Schema;
const ObjectID=Schema.Types.ObjectId;

let users=new Schema({
    username:{type:String,unique:true},
    password:String
})

let notes=new Schema({
    index:Number,
    username:String,
    title:String,
    description:String
})

let maxIndexes=new Schema({
    username:String,
    index:Number
})

export const userModel=mongoose.model('users',users);
export const noteModel=mongoose.model('notes',notes);
export const maxIndexModel=mongoose.model('maxIndexes',maxIndexes);