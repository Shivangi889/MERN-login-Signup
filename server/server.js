const express= require("express");
const bodyparser= require("body-parser")
const cors=require("cors");
const PORT =3005;
const api= require("./routes/api")
const app= express();
app.use(cors())
app.use(bodyparser.json());

app.use('/api',api)
app.get('/',(req,res)=>{
    res.send("hello from server")
})
app.listen(PORT,()=>console.log("server is running on : ", PORT));