import { Document } from "mongoose";

export interface roses extends Document {
  cityname: String;
  cityid: Number;
  avgreadings: Number;
  lastUpdated: {
    date: String;
    time: String;
  };
  hotpots: [
    {
      raw: String;
      landmark: String;
      count: Number;
    }
  ];
}
