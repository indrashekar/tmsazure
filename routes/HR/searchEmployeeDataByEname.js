var mysql=require('./mysqlConnection');
//var logger = require('morgan');

var logger=require('./loggers');

var searchEmployeeDataByEname = function searchEmployeeDataByEname(){
};


searchEmployeeDataByEname.searchEmployeeDataByEname = function(req, res) { 
var name = req.params.name;
try{
mysql.query("SELECT DISTINCT employeemaster.UserId,employeemaster.ProfilePhoto AS Profile_Photo, employeemaster.EmployeeId AS Employee_No, employeemaster.FirstName AS Employee_First_Name,employeemaster.LastName AS Employee_Last_Name, employeemaster.Designation AS Designation,employeemaster.ReportingManager AS Reporting_Head, employeemaster.email AS Email, employeemaster.PriorExprience AS Prior_Exprience,employeemaster.integraExperience AS Integra_Exprience, employeemaster.totalExperience AS Total_Exprience, employeemaster.PrimarySkill AS PrimarySkill, employeemaster.DateOfLeaving AS DateOfLeaving FROM  employeemaster WHERE employeemaster.FirstName LIKE " + mysql.escape('%' +name+ '%'), function(err, results) {
//mysql.query("SELECT DISTINCT employeemaster.EmployeeId AS EmployeeNo, employeemaster.FirstName AS Employee_First_Name,employeemaster.LastName AS Employee_Last_Name, employeemaster.email AS Email, employeemaster.Availability AS Availability, categorymaster.CategoryName AS categoryName, skillmaster.SkillName AS skillName, employeeskillmaster.Rating AS rating FROM employeeskillmaster JOIN categorymaster JOIN skillmaster JOIN employeemaster ON employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeeskillmaster.UserId = employeemaster.UserId and employeemaster.FirstName LIKE " + mysql.escape('%' +name+ '%'), function(err, results) {

if (err) throw err;
if (results.length === 0) {
res.status(403).send({success: false, message: 'Data not found based on this employeeName_ ' + req.params.name});
logger.info({ success: false, message: 'Data not found based on this employeeName__ ' + req.params.name});
} else {

console.log("searched Employee Data details based on ename " + req.params.name);
res.send(results);
logger.info({ success: true, message: 'Successfully populate Employee Data details based on employeeName__ ' + req.params.name});
console.log(results);


}
});
} catch (err) {
console.error(err);
}
};

module.exports=searchEmployeeDataByEname;