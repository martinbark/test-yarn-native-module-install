const fs = require('fs');
const assert = require('assert');

assert(fs.existsSync('node_modules/nan-hello-world/build'),
  'node_modules/nan-hello-world/build missing');

assert(fs.existsSync('node_modules/c/node_modules/nan-hello-world/build'),
  'node_modules/c/node_modules/nan-hello-world/build missing');

assert(fs.existsSync('node_modules/d/node_modules/nan-hello-world/build'),
  'node_modules/d/node_modules/nan-hello-world/build missing');

console.log('Test Passed');
