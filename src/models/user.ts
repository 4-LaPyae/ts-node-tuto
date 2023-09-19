import mongoose from "mongoose";
const { Schema } = mongoose;
interface IUser {
  name: string;
  city: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model<IUser>("user", userSchema);

export default User;
