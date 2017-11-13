var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var fetchEmployeeResourceSkillDetailsSelf = function fetchEmployeeResourceSkillDetailsSelf(){
};


fetchEmployeeResourceSkillDetailsSelf.fetchEmployeeResourceSkillDetailsSelf = function(req, res) { 
var UserId = req.params.UserId;
try{
mysql.query('SELECT DISTINCT categorymaster.CategoryName AS categoryName, skillmaster.SkillName AS skillName, employeeskillmaster.Rating AS rating, employeeskillmaster.ModifiedDate AS ModifiedDate FROM employeeskillmaster JOIN categorymaster JOIN skillmaster JOIN employeemaster ON employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeemaster.UserId = employeeskillmaster.UserId and employeeskillmaster.IsDeleted= 0 and employeemaster.EmployeeId = ' + mysql.escape(UserId),function(err, results) {
if (err) throw err;
if (results.length === 0) {
res.status(403).send({success: false, message: 'Data not found for UserId ' + req.params.UserId});
logger.info({ success: false, message: 'Data not found for this UserId_ ' + req.params.UserId});
console.log("Data not found for this UserId_ "+ req.params.UserId);
} else {
for(var i=0; i<results.length;i++){
	var date;
date = new Date().toISOString().slice(0, 19).replace(/T.*/, ' ');
results[i].ModifiedDate=date;
}
console.log("Successfully fetched manager resource skills based on UserId " +req.params.UserId);
res.send(results);
logger.info({ success: true, message: 'Successfully fetched manager resource skills based on UserId_  ' + req.params.UserId});
console.log(results);

//logger.log(+results);
}
});
} catch (err) {
console.error(err);
}
};

module.exports=fetchEmployeeResourceSkillDetailsSelf;
