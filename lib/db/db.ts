import mongoose, { Connection } from "mongoose";
import { User } from "./userSchema";

let cachedConnection: Connection | null = null;

async function dbConnect(): Promise<Connection> {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI!);
    cachedConnection = conn.connection;
    console.log("Connected to MongoDB");
    return cachedConnection;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

const db = {
  connect: dbConnect,
  User,
};

export default db;
