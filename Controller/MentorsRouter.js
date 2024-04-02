const MentorsRouter=require("express").Router();
const { default: mongoose } = require("mongoose");
const  MentorModel=require("../Model/MentorsModel")





//show all students for a particular mentor.
MentorsRouter.get("/show_students/:mentorId",async(req,res,next)=>{
    try{
        const {mentorId } = req.params;
    const mentor = await MentorModel.findById(mentorId);
    if (mentor) {
        const response = await MentorModel.findById(mentorId,{student:1});
        
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



//to create new mentor.
MentorsRouter.post("/create",async (req,res,next)=>{
    const NewMentor= new MentorModel(req.body);
    console.log(NewMentor)
    try {
     const response= await NewMentor.save();
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
     
    } catch (error) {
     return res.status(500).json({
         success:false,
         error:err,  
         message:"Internal Server Error"
     });
    }
 })
 
 
 
 

//to get all mentor.

MentorsRouter.get("/allmentor",async(req,res,next)=>{

    try{
        const response=await MentorModel.find();
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


//to create new mentor.
MentorsRouter.post("/create",async (req,res,next)=>{
   try {
    const  NewMentor= new MentorModel(req.body);        
  
   const response= await NewMentor.save();
   
   if(response && response._id){
    return res.status(200).json({
        success:true,
        message:"mentor is created successfully",
        data:response,
    });
   }
   else{
        return res.status(400).json({
            success:false,
            message:"Something went wrong",
        })
    }

    
   } catch (err) {
    return res.status(500).json({
        success:false,
        error:err,  
        message:"Internal Server Error"
    });
    
   }

})








module.exports=MentorsRouter;