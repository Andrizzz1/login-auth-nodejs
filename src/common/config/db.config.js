import mongoose from "mongoose";

const baseURL = process.env.MONGODB_URI;

const connectDB = async (baseURL) => {
  const conn = await mongoose.connect(baseURL);
  console.log(conn.connections.user);
  return conn;
};

export default connectDB;
