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
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default:false,
      select:false
    },
    verificationToken: {
      type:String,
      select:false
    },
    verificationExpireIn: {
      type: Date,
      select:false
    },
    refreshToken: {
      type: String,
      select:false
    },
    resetPasswordToken: {
      type: String,
      select:false
    },
    resetPasswordExpire: {
      type: Date,
      select: false
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
