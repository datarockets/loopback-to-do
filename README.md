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

`yarn setup` script will install all needed dependencies and utils

### Update

`yarn update` script will update all needed dependencies and utils

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
