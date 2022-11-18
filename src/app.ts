import {Context, Engine} from "eviate"
const app: Engine = new Engine()

app.get("/", (ctx: Context) => {
    console.log(ctx.headers)
    return {
        json: {
            "Name": "Apoorv"
        }
    }
})

export default app;