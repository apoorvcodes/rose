import { Context, EviateMiddlewareResponse } from "eviate";
import { middlewareInterface } from "src/interfaces/fileRouter";
import { cristal } from "gradient-string";
export const middleware: middlewareInterface = {
  name: "basicLogger",
  position: "before",
  run: (ctx: Context): EviateMiddlewareResponse => {
    console.log(cristal("------------------------------"));
    const time = new Date().toISOString();
    console.log(
      cristal(
        `Time: ${time}\nMethod: ${ctx.method}\nPath: ${ctx.path}\nParams: ${
          ctx.params
        }\nHeaders: ${ctx.headers}\nContent-Type: ${ctx.headers.get(
          "Content-Type"
        )}`
      )
    );

    console.log(cristal("------------------------------\n"));
    return {
      ctx: ctx,
    };
  },
};
