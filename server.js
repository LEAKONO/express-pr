const express=require('express')
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv")
const app=express()
const PORT=3000;

app.use(cors());
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.MONGO_URI ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => console.error("MongoDB connection error:", err));
app.get('/',(req,res)=>{
    res.send("Hello express")
})
app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING on http://localhost:${PORT}`);
});