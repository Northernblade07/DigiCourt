import mongoose from "mongoose";

const JudgeSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    specialCode:{type:String, required:true},
    approvedCases:[{type:mongoose.Schema.Types.ObjectId,ref:"Case"}],
    createdAt:{type:Date,default:Date.now()},
})

const Judge = mongoose.models.Judge||mongoose.model("Judge",JudgeSchema)
export default Judge;