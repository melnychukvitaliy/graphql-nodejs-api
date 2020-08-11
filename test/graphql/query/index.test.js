const { assert } = require("chai");

const {
  Query: { hello },
} = require("../../../src/graphql/query");

describe("graphql/query", () => {
  describe("hello resolver", () => {
    it("Should respond with text", () => {
      assert.deepEqual(hello(), "hello from query hello resolver");
    });
  });
});
