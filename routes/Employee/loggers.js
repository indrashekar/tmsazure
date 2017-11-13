var winston = require('winston');
var loggers = new (winston.Logger)({
});

loggers.add(winston.transports.File, {
prettyPrint: true,
level: 'info',
silent: false,
colorize: true,
//timestamp: true,
timestamp: function(){
return new Date().toLocaleString();
},
filename: './tmplog.log',
maxsize: 4000000,
maxFiles: 10,
json: true
}); 
module.exports = loggers;