var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var deleteEmployeeResourceSkillsByRC = function (){

};

deleteEmployeeResourceSkillsByRC.deleteEmployeeResourceSkillsByRC = function(req, res) { 

var date;
date = new Date().toISOString().slice(0, 19).replace('T', ' ');

try{

mysql.query("UPDATE `employeeskillmaster` SET `IsDeleted`=1,`ModifiedDate`=? where `EmployeeSkillId`=? and `UserId`=?", [date,req.body.EmployeeSkillId, req.body.UserId] , function(err,result) {

if (err) throw err;
console.log("Deleted Resource Skill for UserID_" +req.body.UserId);
res.send("Deleted Resource Skills "+JSON.stringify(result));
console.log(result);
logger.info({ success: true, message: 'Successfully Deleted Resource Skill for UserID_' +req.body.UserId});

});

}catch (err) {
// This will not catch the throw!
console.error(err);

}

};

module.exports=deleteEmployeeResourceSkillsByRC;


