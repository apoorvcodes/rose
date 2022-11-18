
import { FileSystemRouter } from "./helpers/fileRouter"


const router: FileSystemRouter = new FileSystemRouter({
    routerDir: "src/routes",
    middlewareDir: "src/middlewares",
    log: true
})

export default router;