const express = require("express")
const mongoose=require("mongoose")
const path=require("path")
const app=express();
const router=require("./routes/student-routes.js")
// const 

app.use(express.json());

app.use(express.static(path.join((__dirname,'public'))))
app.use('/uploads',express.static('uploads'));
app.use(express.urlencoded({extended:true}));

app.use("/",router);

const port=3010;
mongoose.connect(
    "mongodb+srv://nancyverma632002:pHpDe7egH2QgHmoC@cluster0.hijkfsw.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    app.listen(port,()=>{
        console.log(`listening at port ${port}`)
    })
}).catch(err=>{
    console.log(err);
})