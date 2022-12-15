import { Context, EviateResponse } from "eviate";
import { FileRouteInterface } from "src/interfaces/fileRouter";

export const route: FileRouteInterface = {
  method: "GET",
  run: (ctx: Context): EviateResponse => {
    console.log()
    ctx.req.headers.forEach(h => console.log(h))
    return {
      json: { "name": "Hi" },
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        AllowedOrigins: "*",
        AllowedMethods: "*",
        AllowedHeaders: "*",
        AllowCredentials: "false",
      },
    };
  },
};
