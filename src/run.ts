import {Context, Engine} from "eviate"
import {FileSystemRouter} from "@eviatejs/plugin-filesystem-router"
const app: Engine = new Engine()


const router: FileSystemRouter = new FileSystemRouter({
    routerDir: "src/routes",
    middlewareDir: "src/middlewares",
    log: true
})

app.plugin.load(router)
app.plugin.run()

app.get("/", (ctx: Context) => {
    console.log(ctx.headers)
    return {
        json: {
            "Name": "Apoorv"
        }
    }
})


app.listen(
    {
    port: 3000,
    hostname: "localhost",
    debug: true
    }
)