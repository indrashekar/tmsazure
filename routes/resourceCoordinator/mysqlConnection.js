//var mysql = require('mysql');

/*var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : 'root123',
database: 'db_tmp' 

host : 'talentmanagementsystem-mysqldbserver.mysql.database.azure.com',
user     : 'mysqldbuser@talentmanagementsystem-mysqldbserver',
password : 'int123$%^',
port: 3306, 
database: 'db_tmp'

}); */


const mysql = require('mysql2');

var config =
{
    host: 'talentmanagementsystem-mysqldbserver.mysql.database.azure.com',
    user: 'mysqldbuser@talentmanagementsystem-mysqldbserver',
    password: 'int123$%^',
    database: 'db_tmp',
    port: 3306,
    ssl: true
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
          
    }   
});

module.exports = conn;
