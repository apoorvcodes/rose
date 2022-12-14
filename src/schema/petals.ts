import mongoose from "mongoose";
import { Petals } from "../interfaces/petals";

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

export const User: any = mongoose.model<Petals>("Data", UserSchema);
