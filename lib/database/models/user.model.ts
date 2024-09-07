import { model, Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    clerkId: { type: String, requied: true, unique: true },
    username: { type: String, requied: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    creditBalance: { type: String, required: true },
    photo: { type: URL, required: true },
  },
  { timestamps: true }
);
const User = models?.User || model("users", userSchema);

export default User;