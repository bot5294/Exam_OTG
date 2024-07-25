const userModel = require('../models/userModel');
const loginModel = require('../models/loginModel');
exports.getDetails = async (req, res) => {
    try {
      console.log("Request Body:", req.body);
  
      const userId = req.query.user_id;
      console.log("user_id : ", userId);
  
      if(!userId){
        return res.json({success:false,message:'Missing required parameters.'});
      }
      const user = await userModel.findOne({ user_id:userId }).populate('user_id');

      if(!user){
        return res.json({success:false,message:'User Not found.'});
      }
      const fname = user.fname;
      const lname = user.lname;
      const location = user.location;
      const created_at = user.created_at;
      const email = user.StudentLogin.email;
      const username = user.StudentLogin.username;
      return res.json({success:true,details:{fname,lname,location,created_at,email,username}});
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ success: false, message: 'Server error @ getDetails' });
    }
  };
  
  exports.setUserDetails = async(req,res)=>{
    try{
        const userId = req.query.user_id;
        if(!userId){
            return res.json({success:false,message:'Missing parameters.'});
        }
        const { location,lname,fname } = req.body;
        if(!location || !lname || !fname){
            return res.json({success:false,message:'First Name,Last Name and Location are reuired'});
        }
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            {fname:fname,lname:lname,location:location},
            { new: true, runValidators: true }
          );
        return res.json({success:true,message:'Details updated successfully.'});
    }catch(error){
        console.error("Error:",error);
        return res.status(500).json({success:false,message:'Server error @ setUserDeatils'});
    }
  }

  exports.fetchUsers = async (req,res)=>{
    const { offset = 0, limit = 10, name } = req.query;

    try {
      const query = {};
      if (name) {
        query.$or = [
          { username: new RegExp(name, 'i') }, // Case-insensitive search for fname
          { email: new RegExp(name, 'i') }  // Case-insensitive search for lname
        ];
      }

      const students = await loginModel.find(query)
        .skip(parseInt(offset))
        .limit(parseInt(limit));
  
      res.status(200).json({students,'total_users':students.length});
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: 'Failed to fetch students' });
    }
  }