const StudentsRouter=require("express").Router();
const { default: mongoose } = require("mongoose");
const StudentModel=require("../Model/StudentsModel")

// to get all student.
StudentsRouter.get("/allstudent",async(req,res,next)=>{
 
    try{
        const response=await StudentModel.find();
        if(response.length>0){
            return res.status(200).json({
                success:true,
                message:"Mentor fetched successfully",
                data:response,
            });
        }else{
            return  res.status(200).json({
                success:true,
                message:"No mentor Found",
                data:response,
            });
        }
    } catch(err){
        return res.status(500).json({
            success:false,
            error:err,  
            message:"Internal Server Error"
        });
    }
        });


        
//to create new studeent.
StudentsRouter.post("/create",async(req,res,next)=>{
    const  NewStudent=new StudentModel(req.body);
try{
    const response= await NewStudent.save();
    if(response && response._id  ){
        return res.status(200).json({
            success:true,
            message:"Student is created successfully",
            data:response,
        });
    }else{
        return res.status(400).json({
            success:false,
            message:"Something went wrong",
        })
    }

}catch(err){
    return res.status(500).json({
        success:false,
        error:err,  
        message:"Internal Server Error"
    });
}
})






/*  List of students with no mentors */

StudentsRouter.get('/no-mentors',async (req,res) => {
    try {
        const response = await StudentModel.aggregate([
             
            // Project a new field 'mentorLength' with the length of the 'mentor' array
            { $project: { mentorLength: { $size: "$mentor" } } },
           { $match: {mentorLength:0 } },
          ]);
     
        return res.status(200).json({
            success:true,
            message:"Student with no mentor is fetched successfully",
            data:response,
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:err,  
            message:"Internal Server Error"
        });
    }
   
   
})







module.exports=StudentsRouter;