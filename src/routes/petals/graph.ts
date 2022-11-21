import { Context, EviateResponse } from "eviate";
import { FileRouteInterface } from "src/interfaces/fileRouter";

export const route: FileRouteInterface = {
  method: "GET",
  run: (_: Context): EviateResponse => {
    return {
      text: "Graph",
      status: 200,
    };
  },
};
