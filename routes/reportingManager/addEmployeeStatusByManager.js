var mysql=require('./mysqlConnection');
var passwordHash = require('password-hash');

var logger=require('./loggers');

var addEmployeeStatusByManager = function (){
};

addEmployeeStatusByManager.addEmployeeStatusByManager = function(req, res) { 

console.log("Connected to Mysql");


var date;
date = new Date().toISOString().slice(0, 19).replace('T', ' ');

mysql.query("UPDATE `employeemaster` SET `Availability`=?,`ModifiedDate`=? where `EmployeeId`=?", [req.body.Availability,date,req.body.EmployeeId] , function(err,result) {

if (err) throw err;
console.log("Updated Resource Skills");
res.send("Updated Resource Skills "+JSON.stringify(result));
console.log(result);
logger.info({ success: true, message: 'Successfully Updated Resource Skills for UserID_' + req.body.EmployeeId});
});

};

module.exports=addEmployeeStatusByManager;



