import { Context, Engine } from "eviate";
const app: Engine = new Engine();

app.get("/", (ctx: Context) => {
  console.log(ctx.headers);
  return {
    interface: ctx.file("src/static/Home.html"),
    status: 200,
  };
});

export default app;
