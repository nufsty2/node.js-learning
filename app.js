const logger = require('./logger.js');
const path = require('path');
const os = require('os');
const fs = require('fs');

// path
var pathObj = path.parse(__filename);
logger.log(pathObj);

// os
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
logger.log('Total Memory: ' + totalMemory);
logger.log(`Free Memory: ${freeMemory}`);

// fs
const files = fs.readdirSync('./'); // synchronous
console.log(files);
fs.readdir('./', function(err, files) { // asynchronous
    if (err)
        console.log('Error', err);
    else
        console.log('Result', files);
});


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