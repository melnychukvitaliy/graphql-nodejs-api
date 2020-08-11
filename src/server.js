const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require("graphql-import");

const { serverPort, isDevelopmentEnv, webHost } = require("./config");
const { initErrorTracking, captureException } = require("./services/sentry");

const { resolvers } = require("./graphql");
const context = require("./context");

const typeDefs = importSchema("src/graphql/schema.graphql");

initErrorTracking();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  formatError: (err) => {
    if (!isDevelopmentEnv) {
      captureException(err);
      return new Error("Internal server error");
    }

    // Otherwise return the original error.  The error can also
    // be manipulated in other ways, so long as it's returned.
    return err;
  },
});

const app = express();

// Used by AWS for API health checks
app.get("/", (req, res) => res.sendStatus(200));

const cors = {
  origin: webHost,
  credentials: true,
};

server.applyMiddleware({ app, cors });

app.listen(serverPort, () =>
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${serverPort}!`)
);
