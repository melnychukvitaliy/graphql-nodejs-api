require("dotenv").config();

const environment = process.env.NODE_ENV || "development";

const isDevelopmentEnv = environment === "development";

const serverPort = 4000;

const mysql = {
  host: process.env.MYSQL_HOST || "127.0.0.1",
  port: 3306,
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "123root123",
  database: process.env.MYSQL_DATABASE || "db_name",
};

const webHost = process.env.WEB_HOST || "http://localhost:3000";

module.exports = {
  environment,
  isDevelopmentEnv,
  serverPort,
  mysql,
  webHost,
};
