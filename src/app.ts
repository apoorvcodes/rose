import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { startStandaloneServer } from "@apollo/server/standalone";
import { UserResolver } from "./resolvers/user";
import { listen } from "./interfaces/Listen";

export async function bootstrap({ Port, Host, debug }: listen) {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const server = new ApolloServer({ schema,  });

  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: Port },
  });

  console.log(
    `🚀  Server ready at ${url} running on ${
      debug ? "debug mode" : "non debug mode"
    } on ${Host}`
  );
}
