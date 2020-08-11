# graphql-nodejs-api

Template repository for quick start graphql+node.js based project

## Requirements

- Mysql 8.0.19
- Node.js v12.13.1

## Development

All commands you need for development is described in `package.json`.

Before you start, be sure you've installed requirements.

To activate Node.js version through `nvm` run `nvm use` from the root directory.

## Unit testing

This repository partly covered with unit test but they are required for development.

All tests should be added in `./test/` directory and fully mirror `./src` directory. You might see all tests as examples how they should be written.

During development one rule should be followed: `all files should be covered with unit tests before master branch merge`

To run tests:

```
npm test
```

To check tests coverage:

```
npm run coverage
```

### Running GraphQL server

Before you run, fill `.env` file from `./.env.example`. Some of variables have default values that might be used locally. You can check them in `./src/config.js`.

Once you of the env variables are filled, run following command to start server:

```
npm run develop
```

## CI/CD

For CI we are using GitGub Actions Workflow that is described in `./.github/workflows/ci.yml`.
