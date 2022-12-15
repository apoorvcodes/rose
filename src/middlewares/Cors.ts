import { Context, EviateMiddlewareResponse } from "eviate";
import { middlewareInterface } from "src/interfaces/fileRouter";

export const middleware: middlewareInterface = {
  name: "cors",
  position: "before",
  run: (ctx: Context): EviateMiddlewareResponse => {
    return {
      ctx: ctx,
      header: {
        "Content-Type": "application/json",
        AllowedOrigins: "*",
        AllowedMethods: "*",
        AllowedHeaders: "*",
        AllowCredentials: "false",
      },
    };
  },
};
