import mongoose from "mongoose";
const uri =
  "mongodb+srv://ahpyae:ahpyae123@kaven.vvxwuen.mongodb.net/rental?retryWrites=true&w=majority";
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas with Mongoose!");
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas with Mongoose:", err);
  }
};
