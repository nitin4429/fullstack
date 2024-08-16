import mongoose from "mongoose";
// import usermodel from "./models/user.model.js";
// import bcrypt from 'bcryptjs';

/**
 * mongoose.set("strictQuery", false); sets Mongoose's query strictness to false.
 * This means that Mongoose will not return an error if you try to query for a
 * non-existent field. Instead, it will simply return an empty result.
 * With strict query set to true, Mongoose will return an error if you try to
 * query for a non-existent field.
 */
mongoose.set("strictQuery", false);

const connectToDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URI || `mongodb://127.0.0.1:27017/lms`
    );

    if (connection) {
      console.log(`Connected to MongoDB: ${connection.host}`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
// async function init(){
//   try {
//       let user = await usermodel.findOne({role: "ADMIN"})
//       if (user) {
//           console.log("already have a admin")
//           return
//       }
      
//   } catch (error) {
//       console.log("error while search admin", error);
//   }
//   try {
//       user = await usermodel.create({
//           fullName:"Nitin",
//           email: "niting@g.com",
//           role:"ADMIN",
//           password:bcrypt.hashSync("nishu@29",7)
//       })
//       console.log("Admin created" , user);
//   } catch (error) {
//       console.log("error while creating admin",error)
//   }
// }

export default connectToDB;
