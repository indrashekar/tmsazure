
var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var fetchCurrentEmployeeDataByRC = function fetchCurrentEmployeeDataByRC(){
};

fetchCurrentEmployeeDataByRC.fetchCurrentEmployeeDataByRC = function(req, res) { 
try {
mysql.query("SELECT DISTINCT employeemaster.EmployeeId AS EmployeeNo, employeemaster.FirstName AS Employee_First_Name,employeemaster.LastName AS Employee_Last_Name, employeemaster.email AS Email, employeemaster.Designation AS Designation, employeemaster.PriorExprience AS PriorExprience, employeemaster.integraExperience AS integraExperience ,(employeemaster.PriorExprience + employeemaster.integraExperience) AS totalExperience, employeemaster.Availability AS Availability, categorymaster.CategoryName AS categoryName, skillmaster.SkillName AS skillName, employeeskillmaster.Rating AS rating FROM employeeskillmaster JOIN categorymaster JOIN skillmaster JOIN employeemaster ON employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeeskillmaster.IsDeleted= 0 and employeemaster.DateOfLeaving is null", function(err, results) {

if (err) throw err;
if (results.length === 0) {
res.status(403).send({ success: false, message: 'Current Employee Data not found'});
console.log("Current Employee Data not found");
logger.info({ success: false, message: 'Current Employee Data not found'});
} else {
console.log("Current Employee Data details");
res.send(results);
console.log(results);
logger.info({ success: true, message: 'Successfully fetched Current Employee Data'});
}
});
} catch (err) {
console.error(err);
}
};

module.exports=fetchCurrentEmployeeDataByRC;

