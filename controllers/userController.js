const User=require('./models/User')

exports .createUser=async(req,res)=>
{
try{
    const newUser=await User.create(req.body)
    res.status(201).json(newUser);
}catch(err){
    res.status(400).json({ error: err.message });
}
}
exports .getUsers=async(req,res)=>{
    try{
        const users=await User.find()
        res.status(200).json(users)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}
exports.getUser=async(req,res)=>{
    try{
        const user=await User.findOne(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}
exports.updateUser=async(req,res)=>{
    try{
    const updateOne=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updateOne)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}
exports.deleteUser=async(req,res)=>{
    try{
const deleted=await User.findByIdAndDelete(req.params.id)
res.status(200).json(deleted)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}