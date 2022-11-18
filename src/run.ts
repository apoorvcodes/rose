import app from "./app";
import { DEBUG, HOST, PORT } from "./constants";
import router from "./fileRouter";

router.mutate(app);

app.listen({
    port: PORT,
    hostname: HOST,
    debug: DEBUG
}); 