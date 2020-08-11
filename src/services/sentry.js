const Sentry = require("@sentry/node");
const { isDevelopmentEnv, environment } = require("../config");

const captureException = (err, context) =>
  Sentry.captureException(err, context);

const initErrorTracking = () => {
  if (!isDevelopmentEnv) {
    Sentry.init({
      dsn: "ADD_SENTRY_DSN",
      environment,
    });
  }
};

module.exports = {
  initErrorTracking,
  captureException,
};
