import '../sass/base.scss';

import * as greet from './testvar';
// or:
// const greet = require('./testvar');

// console.log(`in client.js: hello, greet name: ${greet.name}`);

greet.default();
greet.printName();

// this is required in the entrypoint for HMR to work. It will be removed by minification in prod as its effectivley orphan code
if (module.hot) {
  module.hot.accept();
}
