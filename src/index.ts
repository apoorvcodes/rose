import { StartServer } from "./apollo";
import { PORT,HOST, DEBUG } from "./constants";
import { orm } from "./utils/mongoOrm";

orm.connect()
StartServer({
  port: PORT,
  host: HOST,
  debug: DEBUG
})

