const mongoose = require("mongoose");

const StudentSchema=mongoose.Schema({
name:{type:String,require:true,unique:true},
email:{type:String,require:true,unique:true},
mentor: [{type:mongoose.Schema.Types.ObjectId,default:null, ref: 'Student'}],
},{timestamps:true}
);


//to create model.
const StudentModel=mongoose.model("Students",StudentSchema);


module.exports=StudentModel;