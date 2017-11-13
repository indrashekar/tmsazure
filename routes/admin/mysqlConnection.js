var mysql = require('mysql');

var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : 'root123',
database: 'db_tmp'
});

module.exports = connection;
