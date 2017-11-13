var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var updateEmployeeResourceSkillsByManager = function (){
};

updateEmployeeResourceSkillsByManager.updateEmployeeResourceSkillsByManager = function(req, res) { 

if (!req.body.Rating){ 
logger.info({ success: false, message: 'Rating must not empty'});
return res.status(401).send({success: false, message: 'Rating required'});
console.log("Rating required");
}  

if (!req.body.UserId){ 
logger.info({ success: false, message: 'UserId must not empty'});
return res.status(401).send({success: false, message: 'UserId required'});
console.log("UserId required");
}

if (!req.body.EmployeeSkillId){ 
logger.info({ success: false, message: 'EmployeeSkillId must not empty'});
return res.status(401).send({success: false, message: 'EmployeeSkillId required'});
console.log("EmployeeSkillId required");
}

try {
mysql.query("UPDATE `employeeskillmaster` SET `Rating`=? where `EmployeeSkillId`=?", [req.body.Rating,req.body.EmployeeSkillId, req.body.UserId] , function(err,result) {

if (err) throw err;
console.log("Updated Employee Resource Skills");
res.send("Updated Employee Resource Skills "+JSON.stringify(result));
console.log(result);
logger.info({ success: true, message: 'Successfully Updated Employee Resource Skills for UserId_' + req.body.UserId});
});
}  catch (err) {
// This will not catch the throw!
console.error(err);
}
};

module.exports=updateEmployeeResourceSkillsByManager;


