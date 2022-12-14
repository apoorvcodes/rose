import { Context, EviateResponse } from "eviate";
import { FileRouteInterface } from "src/interfaces/fileRouter";

export const route: FileRouteInterface = {
  method: "GET",
  run: (ctx: Context): EviateResponse => {
    return {
      text: ctx.params.user,
      status: 200,
    };
  },
};
