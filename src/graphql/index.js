const query = require("./query");
// const Mutation = require("./mutation");

module.exports = {
  resolvers: {
    ...query,
    // Mutation,
  },
};
