const AssignRouter=require("express").Router();
const { default: mongoose } = require("mongoose");
const StudentModel=require("../Model/StudentsModel");
const MentorModel=require("../Model/MentorsModel");


//assign mentor to a student.
AssignRouter.post("/to_student/:mentorId/:studentId",async(req,res,next)=>{
    try{
        const { mentorId, studentId } = req.params;
    const student = await StudentModel.findById(studentId);
    if (student) {
        const response = await StudentModel.findByIdAndUpdate(studentId, {$push:{ mentor: mentorId }}, { new: true });
        
        if(response && response._id){
            return res.status(200).json({
                success:true,   
                message:"updated successfully",
                data:response,
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"Something Went Wrong"
            })

        }
      
    }else{
       
        return res.status(404).json({
            success:true,
             message: 'student not found',
             });
    }
   

    }catch(err){
        return res.status(500).json({
            success:false,
            error:err,  
            message:"Internal Server Error"
        });
    }
})


//assign students to a mentor

AssignRouter.post("/to_mentor/:mentorId/:studentId",async(req,res,next)=>{
    try{
        const { mentorId, studentId } = req.params;
    const mentor = await MentorModel.findById(mentorId);
    if (mentor) {
        const response = await MentorModel.findByIdAndUpdate(mentorId, {$push:{ student: studentId }}, { new: true });
        
        if(response && response._id){
            return res.status(200).json({
                success:true,   
                message:"updated successfully",
                data:response,
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"Something Went Wrong"
            })

        }
      
    }else{
       
        return res.status(404).json({
            success:true,
             message: 'student not found',
             });
    }
   

    }catch(err){
        return res.status(500).json({
            success:false,
            error:err,  
            message:"Internal Server Error"
        });
    }
})








module.exports=AssignRouter;