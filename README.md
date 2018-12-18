![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## 01 - Node Ecosystem

### Author: Heather Cherewaty

### Links and Resources
[![Build Status](https://www.travis-ci.com/hcherewaty/01-node-ecosystem.svg?branch=master)](https://www.travis-ci.com/hcherewaty/01-node-ecosystem)

* [repo](https://github.com/hcherewaty/01-node-ecosystem)
* [travis](https://www.travis-ci.com/hcherewaty/01-node-ecosystem)
* [server](https://hc-node-ecosystem-01.herokuapp.com/)

### Modules
#### `greet.js and arithmetic.js`
##### Exported Values and Methods
* `greeting.sayHello() -- will return null if no param passed in`
* `greeting.sayHello(randomNameOne, randomNameTwo) -- returns null if given more than 1 name`
* `greeting.sayHello(randomNumber) -- returns null if a number is passed in`
* `greeting.sayHello(World) -- returns  'Hello, World!'`

### Setup
#### `.env` requirements
* `PORT` - Defined in ENV.

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns console.log values from tests run on modules.

#### Tests
* npm test (runs unit tests)
* npm run lint (runs linter tests)
