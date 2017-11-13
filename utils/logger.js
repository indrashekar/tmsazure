var winston = require('winston');

var logger = new (winston.Logger)({

  levels: {
    trace: 0,
    input: 1,
    verbose: 2,
    prompt: 3,
    debug: 4,
    info: 5,
    data: 6,
    help: 7,
    warn: 8,
    error: 9

  },

  colors: {

    trace: 'magenta',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    debug: 'blue',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    error: 'red'

  }

});

logger.add(winston.transports.Console, {

  level: 'trace',
  prettyPrint: true,
  colorize: true,
  silent: false,
  timestamp: function(){
return new Date().toLocaleString();
}

});

logger.add(winston.transports.File, {

  prettyPrint: false,
  level: 'info',
  silent: false,
  colorize: true,
 timestamp: function(){
return new Date().toLocaleString();
},
  filename: './tmplog.log',
  maxsize: 4000000,
  maxFiles: 10,
  json: false

});

module.exports = logger;

module.exports.stream = {

    write: function(message, encoding){

        logger.info(message);
        
    }

};