const logger = require('./logger.js');

logger.log("hi");

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
*/