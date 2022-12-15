import env from "dotenv";
env.config();

import app from "./app";
import { DEBUG, HOST, PORT, MONGOPASS } from "./constants";
import router from "./fileRouter";
import { ConnectMongo } from "./helpers/mongoOdm";

router.mutate(app);
ConnectMongo(MONGOPASS);

app.listen({
  port: PORT,
  hostname: HOST,
  debug: DEBUG,
});
