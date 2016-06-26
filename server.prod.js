import compression from "compression";
import express from "express";
import graphQLHTTP from "express-graphql";
import path from "path";
import webpack from "webpack";

import schema from "./data/schema";
import webpackConfig from "./webpack.config.prod";

const APP_PORT = 3000;
const graphQLServer = express();

graphQLServer.use(compression());
graphQLServer.use("/", express.static(path.resolve(__dirname, "dist")));
graphQLServer.use("/graphql", graphQLHTTP({graphiql: false, pretty: false, schema: schema}));
graphQLServer.listen(APP_PORT, () => console.log(`GraphQL Server is now running on http://localhost:${APP_PORT}`));
