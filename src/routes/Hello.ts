import { Context, EviateResponse } from "eviate";
import { FileRouteInterface } from "src/interfaces/fileRouter";

export const route: FileRouteInterface = {
  method: "GET",
  run: (ctx: Context): EviateResponse => {
    console.log(ctx.path);
    return {
      text: "Hello World",
      status: 200,
    };
  },
};
