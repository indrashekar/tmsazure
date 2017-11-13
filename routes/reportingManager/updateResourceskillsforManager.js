var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var updateresourceskills = function (){
};

updateresourceskills.updateresourceskills = function(req, res) { 

if (!req.body.SkillID) { 
logger.info({ success: false, message: 'SkillID must not empty'});
return res.status(401).send({ success: false, message: 'SkillID required'});
console.log("SkillID required");
} 
else if (!req.body.RatingsID){ 
logger.info({ success: false, message: 'RatingsID must not empty'});
return res.status(401).send({success: false, message: 'RatingsID required'});
console.log("RatingsID required");
}  
else if (!req.body.CategoryID){
logger.info({ success: false, message: 'CategoryID must not empty'});
return res.status(401).send({success: false, message: 'CategoryID required'});
console.log("CategoryID required");
} 

var date;
date = new Date().toISOString().slice(0, 19).replace('T', ' ');

try {
mysql.query("UPDATE `employeeskillmaster` SET `SkillId`=?,`Rating`=?,`CategoryId`=?,`ModifiedDate`=? where `EmployeeSkillId`=? and `UserId`=?", [req.body.SkillID,req.body.RatingsID, req.body.CategoryID, req.body.ID, req.body.UserID,date] , function(err,result) {

if (err) throw err;
console.log("Updated Resource Skills");
res.send("Updated Resource Skills "+JSON.stringify(result));
console.log(result);
logger.info({ success: true, message: 'Successfully Updated Resource Skills for UserID_' + req.body.UserID});
});
}  catch (err) {
// This will not catch the throw!
console.error(err);
}
};

module.exports=updateresourceskills;


