const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
var cors = require('cors');
const app =express();

app.use(express.json()); // accept the data which is converted to json format 
app.use(cors()) ;
// callling the route module which contains the controller and user model 
app.use("/",router);  // use creates a middleware for a path

//connecting to the cloud database
mongoose.connect(
    "mongodb+srv://nancyverma632002:pHpDe7egH2QgHmoC@cluster0.hijkfsw.mongodb.net/?retryWrites=true&w=majority"
).then(()=>
    app.listen(3000,() => console.log("connected to"))
).catch((err)=> 
    console.log("Got Error",err)
);

// we can all the api using the postman 