# ToDo app

Created and adjusted for node js stack learning

## Tools

We use:

* Express.js for routing
* Sequelize for ORM
* React for client views

## Development

### Setup

1) You may want to install packages for both server and client apps, here you are:

* in root dir: `yarn`
* in /server dir: `yarn`
* in /client dir: `yarn`

2) Create database using psql:

`CREATE DATABASE "todo-list-db"`

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

### Usage

1) For interacting with sequalize cli directly from command line, you may want to install it globally:

  `yarn add sequelize-cli -g`

On the other hand you can always use `node_modules/.bin/sequelize` for not installing globally 😉

## Testing

WIP

## Deployment

WIP
