import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 50,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      minlength: 5,
      maxlength: 12,
      required: true,
      select: false,
    },
    role: {},
    isVerified: {},
    verificationToken: {},
    verificationExpireIn: {},
    refreshToken: {},
    resetPasswordToken: {},
    resetPasswordExpire: {},
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
