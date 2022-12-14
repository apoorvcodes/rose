import mongoose from "mongoose";
export interface IUser extends mongoose.Document {
  userID: string;
  tag?: string;
  warn: [
    {
      reason: String;
      by: String;
      date: Number;
      channelid: String;
    }
  ];
}

export const UserSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  tag: String,
  warn: [
    {
      reason: String,
      by: String,
      date: Number,
      channelid: String,
    },
  ],
});

export const User: any = mongoose.model<IUser>("Data", UserSchema);
