import mongoose from "mongoose";
import { Petals } from "../interfaces/petals";

export const PetalSchema = new mongoose.Schema({
  cityname: String,
  cityid: Number,
  avgreadings: Number,
  phoneNumber: Number,
  petalNode: Number,
  petalName: String,
  location: {
    raw: String,
    landmark: String,
  },
  lastUpdated: {
    date: String,
    time: String,
  },
  readings: [
    {
      raw: Number,
      level: String,
      date: String,
      time: String,
    },
  ],
});

export const User: any = mongoose.model<Petals>("Petals", PetalSchema);
