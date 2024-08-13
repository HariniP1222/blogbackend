import User from '../models/usermodel.js';
export const create=async(req,res)=>{
  try{
  const userDetails = new User(req.body);
  const {email}=userDetails;
  const isExist = await User.findOne({email})
  if(isExist)
  {
      return res.status(400).json({message:"user already exists"})
  }
  const newUser = await userDetails.save();
  res.send(200).json(newUser);
  
}
catch{
  console.log((err)=>console.log(err));
  res.status(500).json({message:"Internal server error"})
}
}
export const fetch= async(req,res)=>{
    try{
        const users=await User.find();
        if(users.length === 0)
        {
            return res.status(404).json({message:"No user found"});
        }
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({error:"internal error"});
    }
}
export const update= async(req,res)=>{
    
        try{
            const id=req.params.id;
            const userExist = await User.findOne({_id:id});
        if(!userExist)
        {
        return res.status(400).json({message:"user not exists"})
        }
        const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true});

        res.status(200).json(updateUser);
        }
    catch(error){
        res.status(500).json({error:"internal error"});
    }
}
export const loginUser = async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
  
      if (user) {
        return res.status(200).json({ exists: true, message: "User exists" });
      } else {
        return res.status(404).json({ exists: false, message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };