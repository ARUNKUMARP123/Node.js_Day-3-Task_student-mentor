const mongoose=require("mongoose");


//to create schema.
const MentorSchema=mongoose.Schema({
    name:{type:String,require:true,unique:true},
    email:{type:String,require:true,unique:true},
    student: [{type:mongoose.Schema.Types.ObjectId, ref: 'Mentor'}],
},{timestamps:true}
);






//to create model.
const MentorModel=mongoose.model("Mentors",MentorSchema)




module.exports=MentorModel;