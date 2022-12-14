import { DataSource } from "typeorm";
import { MONGOPASS } from "src/constants";
const orm = new DataSource({
  type: "mongodb",
  url: MONGOPASS,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: ["src/entity/*.*"],
});

export { orm };
