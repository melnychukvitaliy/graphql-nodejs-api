const tableName = "testTable";

// Transaction adaptive example where you will be able to use db connection externally and
// move part of logic in the models
module.exports = (knex) => {
  const all = (limit, offset) => knex(tableName).limit(limit).offset(offset);

  return {
    all,
  };
};
