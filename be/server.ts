import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { buildSchema } from "type-graphql";
import { CharactersResolver } from "./src/graphql/resolvers/character.resolver";

dotenv.config();

const app = express();
const { PORT } = process.env;

if (!PORT) {
  console.log("const in .env PORT is required");
  process.exit(1);
} else {
  const main = async () => {
    const schema = await buildSchema({
      resolvers: [CharactersResolver],
      emitSchemaFile: true,
      validate: false,
    });
    const server = new ApolloServer({
      schema,
      introspection: true,
    });

    await server.start();

    app.use(cors());
    app.use(express.json());
    app.use(
      express.urlencoded({
        extended: true,
      })
    );
    app.use("/graphql", expressMiddleware(server));
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  };
  main();
}
