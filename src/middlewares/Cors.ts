import { Context, EviateMiddlewareResponse } from "eviate";
import { middlewareInterface } from "src/interfaces/fileRouter";

export const middleware: middlewareInterface = {
  name: "cors",
  position: "before",
  run: (ctx: Context): EviateMiddlewareResponse => {
    return {
      ctx: ctx,
      header: {
        "Access-Control-Allow-Origin": "*",
        AllowedOrigins: "*",
        AllowedMethods: "*",
        AllowedHeaders: "*",
        AllowCredentials: "false",
      },
    };
  },
};
