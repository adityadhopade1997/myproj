const express= require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();

var corsOptions= {
    origin:"http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // parses the request of type app/json
app.use(bodyParser.urlencoded({extended:true}));

const db=require("./models");
db.sequelize.sync();

// In development, you may need to drop existing tables and re-sync database. Just use force: true
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

// simple routing here
app.get("/",(req,res)=>{
    res.json({message:" Welcome to Aditya's Application here"});
})


// set port,listen to the requests
const  PORT= process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
