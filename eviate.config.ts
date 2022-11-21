import { config } from "eviate";
import { PORT, HOST, DEBUG } from "./src/constants";

const config: config = {
  port: PORT,
  hostname: HOST,
  debug: DEBUG,
};

export default config;
