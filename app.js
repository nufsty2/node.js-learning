const logger = require('./logger.js');
const path = require('path');
const os = require('os');

var pathObj = path.parse(__filename);
logger.log(pathObj);
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

logger.log('Total Memory: ' + totalMemory);
logger.log(`Free Memory: ${freeMemory}`);


/*
Notes

Global functions:
- setTimeout();
- clearTimeout();
- setInterval();
- clearInterval();

Global objects:
- "window" doesn't exist in node
- it's called "global" instead

Modules:
- Every file is considered a module
- Everything in modules is private unless exported
- To load a module, call `const module = require('./module.js')`
- Node wraps the code in a module wrapper function instead of calling the
  module code directly
  - (function (exports, require, module, __filename, __dirname) {})

Template string:
- ES6 / ES2015 : ECMAScript 6
- Helps us build a sctring without concatenations
*/