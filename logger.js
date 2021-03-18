// Make our first module
var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports.log = log;

// This will export a single function function instead of the entire object
// module.exports = log;