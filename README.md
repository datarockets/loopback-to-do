# ToDo app

Created and adjusted for node js stack learning

## Tools

We use:

* Express.js for routing
* Sequelize for ORM
* API Blueprint for API docs
* React for client views

## Development

### Setup

WIP: `yarn setup` script will be implemented for faster development start

1) You may want to install packages for both server and client apps, here you are:

in root dir: `yarn update`

2) Create database using sequelize:

  `node_modules/.bin/sequelize db:create`
  `NODE_ENV=test node_modules/.bin/sequelize db:create`

3) For interacting with sequalize cli directly from command line, you may want to install it globally:

  `yarn add sequelize-cli -g`

On the other hand you can always use `node_modules/.bin/sequelize` for not installing globally 😉

4) Install `dredd` globally for easier usage

  `yarn add dredd -g`

Or just use `node_modules/.bin/dredd` instead

5) Copy env variables

  `cp ../server/.env.sample ../server/.env`

### Scripts

List of available scripts:

* `yarn dev` - run both server and client apps;
* `yarn client` - run client app;
* `yarn server` - run server app;
* `yarn lint` - lint server and client code;
* `yarn lint-server` - lint server code;
* `yarn lint-client` - lint client code;
* `yarn update` or `bin/update` - update all dependencies.
* `yarn test-server` - run servers' tests.

### Debug

In order to debug backend code in browser do several steps:

  `cd server && yarn debug`

  visit _about://inspect_ in Chrome and click *Open dedicated DevTools for Node* link

  put `debugger` into your code

  enjoy

## Testing

### System testing

#### Endpoints

For endpoints system-testing we use [Dredd](https://dredd.org/en/latest/) and [apib docs](./server/api-docs.apib) for the API

How to run:

* Call `yarn test:api`
  (it runs dredd tests and kills server process)

Note: all Dredd hooks' files have .hook.js postfix

## Deployment

WIP
