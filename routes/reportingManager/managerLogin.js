var mysql=require('./mysqlConnection');
var winston = require('winston');

// var passwordHash = require('./node_modules/lib/password-hash');
var passwordHash = require('password-hash');
var regenerate = require('regenerate');


var logger = new (winston.Logger)({
});

logger.add(winston.transports.File, {
prettyPrint: true,
level: 'info',
silent: false,
colorize: true,
//timestamp: true,
timestamp: function(){
return new Date().toLocaleString();
},

filename: './tmplog.log',
maxsize: 40000,
maxFiles: 10,
json: true
}); 

var managerLogin = function(){
};
//console.log("password");

managerLogin.managerLogin = function (req,res) {

if (!req.body.Username){ 
logger.info({ success: false, message: 'Username must not empty'});
return res.status(401).send({success: false, message: 'Username required'});
console.log("Username required");
}  
if (!req.body.Password){ 
logger.info({ success: false, message: 'Password must not empty'});
return res.status(401).send({success: false, message: 'Password required'});
console.log("Password required");
}
var pass = req.body.Password;

// var password2 = passwordHash.generate(req.body.Password);
try{
mysql.query("SELECT employeemaster.Password,employeemaster.Username,employeemaster.EmployeeId, employeemaster.FirstName,employeemaster.LastName,roles.Name,roles.RoleID,employeemaster.DateOfJoining,employeemaster.DateOfBirth,employeemaster.ContactNo,employeemaster.email FROM employeemaster JOIN roles ON employeemaster.RoleId = roles.RoleID WHERE employeemaster.Username = ? and employeemaster.RoleId IN (2,3,5)",[req.body.Username],function (err,results){
//var dbpass= results[0].Password;

if(results[0]  && passwordHash.verify(pass, results[0].Password)) {


var message = "Successfully logged in";
console.log("login success");
logger.info({ success: true, message: 'Successfully logged '});
//res.status(200).send(message);

res.status(200).send("User logged in Successfully");



}else {
console.log("login error"); // true
logger.info({ success: true, message: 'login error'});
res.send('Wrong Credentials');
// res.redirect(req.baseUrl);

}



});
}
catch (err) {
console.error(err);
}
}


module.exports=managerLogin;

