import { Document } from "mongoose";

export interface IUser extends Document {
  cityname: String;
  cityid: Number;
  avgreadings: Number
  lastUpdated: {
    date: String;
    time: String;
  };
  hotpots: [
    location: {
        raw: String;
        landmark: String;
        count: Number;
    }
  ];
}
