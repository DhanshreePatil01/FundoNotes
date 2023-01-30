import User from '../models/user.model';
const bcrypt = require('bcrypt')

//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user
export const userRegistration = async (body) => {
  const userexist = await User.findOne({ email: body.email });
  if (!userexist) {
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
    const data = await User.create(body);
    return data;
  }
  else {
    throw new Error("User already exist")
  }
};

//Login
export const login = async (body) => {
  try{
    const userdata = await User.findOne({ email: body.email });
    if (!userdata) {
      throw new Error("Invalid Email")
    }
    const validPassword = await bcrypt.compare(body.password,userdata.password);
    if(!validPassword){
      throw new Error("Invalid Password")
    }
    return userdata;
  }
  catch (error) {
    throw new Error(error)
  }

};
