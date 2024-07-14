const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudentLogin',
      required: true,
    },
    location:{
        type:String,
    },
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    created_at:{
        type:Date,
        default: Date.now 
    }
  });
  
const User = mongoose.model('User', userSchema);
  
module.exports = User;
