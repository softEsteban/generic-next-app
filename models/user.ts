import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: String,
  lastname: String,
  user_type: String,
  email: String,
  password: String,
  avatar: String,
  date_join: Date,
  google_auth: String,
  isGoogleLogin: Boolean
});

const User = models.User || model("User", userSchema, "users");
export default User;
