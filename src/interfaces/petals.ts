import { Document } from "mongoose";

export interface IUser extends Document {
  cityname: String;
  cityid?: Number;
  petalNode: Number;
  petalName: String;
  lastUpdated: String;
  readings: [
    {
      raw: Number;
      by: String;
      date: Number;
      channelid: String;
    }
  ];
}
