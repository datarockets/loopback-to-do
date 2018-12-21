# ToDo app API

## Development

* `yarn setup` installs dependencies & utils

* `yarn update` updates dependencies & utils

### Scripts

List of available scripts:

* `yarn dev` - runs dev server
* `yarn dev:test` - runs dev server in testing env
* `yarn dev:kill` - kills dev server in testing env
* `yarn debug` - run dev server in debug mode

Testing:

* `yarn test` - run all tests
* `yarn test:api` - run endpoints dredd tests and kills test server process
* `yarn test:dredd` - run endpoints dredd tests
* `yarn lint` - lint server and client code

Management:

* `yarn setup` or `bin/setup` - installs all dependencies
* `yarn update` or `bin/update` - update all dependencies

Production:

* `yarn build` - builds sources for production usage
* `yarn start` - runs compiled code

### Debug

In order to debug code in browser do several steps:

- `yarn debug`

- visit _about://inspect_ in Chrome and click *Open dedicated DevTools for Node* link

- put `debugger` into your code

enjoy!

## Docs

### API

API docs located [here](api-docs.apib)

## Testing

### System testing

#### Endpoints

For endpoints system-testing we use [Dredd](https://dredd.org/en/latest/) and [apib docs](./server/api-docs.apib) for the API

Run: `yarn test:api`

*Note*: all Dredd hooks' files have .hook.js postfix

## Deployment

WIP
