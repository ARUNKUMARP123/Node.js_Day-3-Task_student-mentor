const express=require("express");
const bodyparser=require("body-parser");
const{ConnectToDataBase}=require("./dbconfig")


//enabling local env variables
 require("dotenv").config();
 //console.log(process.env)

//initiate db connection.
ConnectToDataBase();

const http_server=express();

//initiate body-parser middileware.
http_server.use(bodyparser.json())

http_server.use("/api/Assign",require("./Controller/AssignRouter"))
http_server.use("/api/Mentor",require("./Controller/MentorsRouter"))
http_server.use("/api/Student",require("./Controller/StudentsRouter"))


http_server.listen(process.env.PORT,process.env.HOSTNAME,()=>{
    console.log("HTTP Server Start")
})