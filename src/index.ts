import { StartServer } from "./apollo";
import { PORT,HOST, DEBUG } from "./constants";

StartServer({
  port: PORT,
  host: HOST,
  debug: DEBUG
})