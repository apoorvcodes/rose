import { bootstrap } from "./app";
import { DEBUG, HOST, PORT } from "./constants";

bootstrap({
  Port: PORT,
  Host: HOST,
  debug: DEBUG,
});
