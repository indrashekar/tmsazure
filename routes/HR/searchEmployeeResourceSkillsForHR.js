var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var searchEmployeeResourceSkillsForHR = function (){

};

searchEmployeeResourceSkillsForHR.searchEmployeeResourceSkillsForHR = function(req, res) { 

try{
mysql.query('SELECT DISTINCT employeemaster.UserId,employeemaster.ProfilePhoto AS Profile_Photo, employeemaster.EmployeeId AS EmployeeId, employeemaster.FirstName AS FirstName,employeemaster.LastName AS LastName, employeemaster.Designation AS Designation,employeemaster.ReportingManager AS reportingmanager, employeemaster.email AS Email, employeemaster.PriorExprience AS PriorExprience,employeemaster.integraExperience AS integraExperience,ROUND(employeemaster.PriorExprience + employeemaster.integraExperience,1) AS totalExperience, employeemaster.PrimarySkill AS PrimarySkill, employeemaster.DateOfLeaving AS DateOfLeaving , categorymaster.CategoryName AS categoryName, skillmaster.SkillName AS skillName, employeeskillmaster.Rating AS rating FROM employeeskillmaster JOIN categorymaster JOIN skillmaster JOIN employeemaster ON employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeeskillmaster.UserId = employeemaster.UserId and employeeskillmaster.IsDeleted= 0 and employeemaster.Availability = 1 and employeeskillmaster.CategoryId = ? and employeeskillmaster.SkillId = ? and employeeskillmaster.Rating = ?',[req.params.CategoryId,req.params.SkillId,req.params.Rating], function(err, results) {
//mysql.query('SELECT DISTINCT employeemaster.EmployeeId AS EmployeeNo, employeemaster.FirstName AS Employee_First_Name,employeemaster.LastName AS Employee_Last_Name, employeemaster.email AS Email, employeemaster.Availability AS Availability, categorymaster.CategoryName AS categoryName, skillmaster.SkillName AS skillName, employeeskillmaster.Rating AS rating FROM employeeskillmaster JOIN categorymaster JOIN skillmaster JOIN employeemaster ON employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeeskillmaster.UserId = employeemaster.UserId and employeeskillmaster.IsDeleted= 0 and employeemaster.Availability = 1 and employeeskillmaster.CategoryId = ? and employeeskillmaster.SkillId = ? and employeeskillmaster.Rating = ? and employeemaster.AvailabilityStatus=?',[req.params.CategoryId,req.params.SkillId,req.params.Rating,req.params.AvailabilityStatus], function(err, results) {
console.log("category id"+req.params.CategoryId);
console.log("skill id"+req.params.SkillId);
console.log("Rating "+req.params.Rating);
console.log("avail"+req.params.AvailabilityStatus);
if (err) throw err;

if (results.length === 0) {
logger.info({ success: false, message: 'No Search found for categoryID_' +req.params.CategoryId});
// res.status(403).send({success: false, message: 'No Search found for categoryID_' +req.params.CategoryId});
res.send(results);

} else {

//var response = { checkresourceskills_ID : results[0].EmployeeSkillId };
console.log("resource skill details for categoryID_" +req.params.CategoryId);
// logger.info(response);
logger.info({ success: false, message: 'Successfully searched employee data for categoryID_' +req.params.CategoryId});
res.send(results);
console.log(results);

}

});

} catch (err) {

console.error(err);

}

};

module.exports=searchEmployeeResourceSkillsForHR;

