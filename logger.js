const EventEmitter = require('events');


// Make our first module
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);
        
        // Raise an event
        this.emit('messageLogged', { id: 1, url: url });   
    }
}


module.exports = Logger;

// This will export a single function function instead of the entire object
// module.exports = log;