import mongoose from "mongoose";
import { roses } from "src/interfaces/roses";

export const RoseSchema = new mongoose.Schema({
  cityname: String,
  cityid: Number,
  avgreadings: Number,
  lastUpdated: {
    date: String,
    time: String,
  },
  hotpots: [
    {
      raw: String,
      landmark: String,
      count: Number,
    },
  ],
});

export const User: any = mongoose.model<roses>("Roses", RoseSchema);

// //return New(Options{
//     AllowedOrigins: []string{"*"},
//     AllowedMethods: []string{
//         http.MethodHead,
//         http.MethodGet,
//         http.MethodPost,
//         http.MethodPut,
//         http.MethodPatch,
//         http.MethodDelete,
//     },
//     AllowedHeaders:   []string{"*"},
//     AllowCredentials: false,
// })
// }
