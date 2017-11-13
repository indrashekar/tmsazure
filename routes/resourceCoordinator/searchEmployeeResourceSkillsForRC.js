var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var searchEmployeeResourceSkillsForRC = function (){

};

searchEmployeeResourceSkillsForRC.searchEmployeeResourceSkillsForRC = function(req, res) { 

try{
mysql.query('SELECT DISTINCT employeemaster.ProfilePhoto AS ProfilePhoto,employeemaster.EmployeeId AS EmployeeNo,employeemaster.FirstName AS Employee_First_Name,employeemaster.LastName AS Employee_Last_Name, employeemaster.email AS Email,employeemaster.Designation AS Designation,employeemaster.PriorExprience AS PriorExprience,employeemaster.integraExperience AS integraExperience,(employeemaster.PriorExprience + employeemaster.integraExperience) AS totalExperience, employeemaster.Availability AS Availability, categorymaster.CategoryName AS categoryName, skillmaster.SkillName AS skillName, employeeskillmaster.Rating AS rating FROM employeeskillmaster JOIN categorymaster JOIN skillmaster JOIN employeemaster ON employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeeskillmaster.UserId = employeemaster.UserId and employeeskillmaster.IsDeleted= 0 and employeemaster.Availability = 1 and employeeskillmaster.CategoryId = ? and employeeskillmaster.SkillId = ? and employeeskillmaster.Rating = ? ',[req.params.CategoryId,req.params.SkillId,req.params.Rating], function(err, results) {

if (err) throw err;

if (results.length === 0) {
logger.info({ success: false, message: 'No Search found for categoryID_' +req.params.CategoryId});
res.status(403).send({success: false, message: 'No Search found for categoryID_' +req.params.CategoryId});


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

module.exports=searchEmployeeResourceSkillsForRC;

