import { Document } from "mongoose";

export interface IUser extends Document {
  cityname: String;
  cityid?: Number;
  petalNode: Number;
  petalName: String;
  location: {
    raw: String;
    landmark: String;
  };
  lastUpdated: {
    date: String;
    time: String;
  };
  readings: [
    {
      raw: Number;
      level: String;
      date: String;
      time: String;
    }
  ];
}
