var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var fetchEmployeeResourceSkillsforManager = function (){

};

fetchEmployeeResourceSkillsforManager.fetchEmployeeResourceSkillsforManager = function(req, res) { 

var managerEmpId = req.params.managerEmpId;

try {

mysql.query('SELECT DISTINCT categorymaster.CategoryName AS categoryName, skillmaster.SkillName AS skillName FROM employeemaster JOIN employeeskillmaster JOIN categorymaster JOIN skillmaster JOIN manager ON employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeeskillmaster.IsDeleted= 0 AND employeemaster.UserId = employeeskillmaster.UserId AND employeemaster.ReportingManager =' + mysql.escape(managerEmpId), function(err, results) {

if (err) throw err;

if (results.length === 0) {

res.status(403).send({ success: false, message: 'Data not found for manager EmpId_ ' +req.params.managerEmpId});
logger.info("success: false, message: 'Data not found for managerEmpId_" +req.params.managerEmpId);
console.log("Data not found for managerEmpId_ "+req.params.managerEmpId)

} else {

console.log("resource user details for manager based on"  + req.params.managerEmpId);
res.send(results);
console.log(results);

logger.info("successfully fetched user deatils based on managerEmpId_" +req.params.managerEmpId);

}

});

} catch (err) {

console.error(err);

}

};

module.exports=fetchEmployeeResourceSkillsforManager;