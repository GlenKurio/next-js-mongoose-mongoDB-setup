import mongoose, { Document, Model, Schema } from "mongoose";

export type TUserDocument = Document & {
  name: string;
  email: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
};

const userSchema = new Schema<TUserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { timestamps: true }
);
export const User: Model<TUserDocument> =
  mongoose.models?.User || mongoose.model("User", userSchema);
