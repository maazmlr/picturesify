import mongoose, { Mongoose } from "mongoose";
import { promiseHooks } from "v8";

// Connect to MongoDB

const MongoDB_Url = process.env.MONGO_URI;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}
export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MongoDB_Url) throw new Error("MongoDb_url is not found");

  cached.promise =
    cached.promise ||
    mongoose.connect(MongoDB_Url, {
      dbName: "picturesify",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
