const User = require('../models/User.js')
const bcrypt = require('bcrypt')

const registerUser = async (req,res) => {
    try{
        const {mobileNumber,password} = req.body;

        const userExists = await User.findOne({mobileNumber});
        if(userExists){
            return res.status(400).json({message: "User already exists with this mobile number."})
        }
        const salt = await bcrypt.genSalt(10);//Generating salt 
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await User.create({
            mobileNumber,
            password: hashedPassword,
        });
        if(user){
            res.status(201).json({
                _id: user._id,
                mobileNumber: user.mobileNumber,
                message: "User registered successfully",
            });
        }else {
        res.status(400).json({message:'Invalid user data.'})
        }
    }catch (error){

        if(error.name === 'ValidationError') {
            const message = Object.values(error.errors).map(val => val.message)[0];
            return res.status(400).json({ message });
        }
        res.status(400).json({message: 'Server error', error: error.message });
    }
};

module.exports = {
    registerUser,
};