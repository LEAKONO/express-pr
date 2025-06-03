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
exports.getUser=