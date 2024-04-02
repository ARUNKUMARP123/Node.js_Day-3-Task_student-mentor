const mongoose=require("mongoose");

 //const URI="mongodb://localhost:27017/Online_Class"
 //const URI=process.env.NODE_ENV==="production"?process.env.MONGODB_URI:"mongodb://localhost:27017/Online_Class";
function  ConnectToDataBase(){  
    const URI=process.env.NODE_ENV==="production"?process.env.MONGODB_URI:"mongodb://localhost:27017/Online_Class";
    //console.log(process.env.NODE_ENV)
    mongoose.connect(URI).then((response)=>{
        if(response) console.log("DataBase Connection Successfull.")
    }).catch((err)=>console.log("DataBase Connection Failed."))
}


module.exports={ConnectToDataBase}