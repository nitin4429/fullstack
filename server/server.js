import { v2 } from 'cloudinary';
import Razorpay from 'razorpay';

import app from './app.js';
import connectToDB from './configs/dbConn.js';
import usermodel from "./models/user.model.js";
import bcrypt from 'bcryptjs'

// Cloudinary configuration
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Razorpay configuration
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});



const PORT = process.env.PORT || 5000;


app.listen(PORT, async () => {
  // Connect to DB
  await connectToDB();
  init()
  console.log(`App is running at http://localhost:${PORT}`);
});

async function init(){
  try {
      let user = await usermodel.findOne({role: "ADMIN"})
      if (user) {
          console.log("already have a admin")
          return
      }
      
  } catch (error) {
      console.log("error while search admin", error);
  }
  try {
      user = await usermodel.create({
          fullName:"Nitin",
          email: "niting@g.com",
          role:"ADMIN",
          password:bcrypt.hashSync("nishu@29",7)
      })
      console.log("Admin created" , user);
  } catch (error) {
      console.log("error while creating admin",error)
  }
}