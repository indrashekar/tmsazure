
var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var fetchAllEmployeeDataByHR = function fetchAllEmployeeDataByHR(){
};

fetchAllEmployeeDataByHR.fetchAllEmployeeDataByHR = function(req, res) { 
try {
 mysql.query("SELECT DISTINCT employeemaster.UserId AS UserId, employeemaster.EmployeeId AS EmployeeId, employeemaster.Username AS Username, employeemaster.Password AS Password, employeemaster.RoleId AS RoleId, employeemaster.ProfilePhoto AS ProfilePhoto, employeemaster.EmployeeId AS EmployeeId, employeemaster.FirstName AS FirstName,employeemaster.LastName AS LastName, employeemaster.Designation AS Designation,employeemaster.ReportingManager AS Reporting_Head ,(SELECT IF(ISNULL(LastName), FirstName, CONCAT(FirstName, ' ', LastName)) FROM employeemaster WHERE employeemaster.EmployeeId = Reporting_Head) AS  reportingmanager, employeemaster.email AS Email, employeemaster.PriorExprience AS PriorExprience,employeemaster.integraExperience AS integraExperience, ROUND(employeemaster.PriorExprience + employeemaster.integraExperience,5) AS totalExperience, skillmaster.SkillName AS PrimarySkill, employeemaster.DateOfLeaving AS DateOfLeaving FROM employeemaster JOIN skillmaster ON employeemaster.PrimarySkill = skillmaster.SkillId WHERE employeemaster.IsDeleted='0'", function(err, results) {

   if (err) throw err;
   if (results.length === 0) {
      res.status(403).send({ success: false, message: 'All Employee Data not found'});
      logger.info({ success: false, message: 'All Employee Data not found'});
    } else {
    for(var i=0; i<results.length;i++){
  var date;
date = new Date().toISOString().slice(0, 19).replace(/T.*/, ' ');
results[i].DateOfLeaving=date;
}

	console.log("All Employee Data details");
	res.send(results);
	logger.info({ success: true, message: 'Successfully fetched All Employee Data'});
 }
 });
} catch (err) {
  console.error(err);
}
};
 
module.exports=fetchAllEmployeeDataByHR;

