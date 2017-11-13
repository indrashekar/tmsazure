var mysql=require('./mysqlConnection');


var logger=require('./loggers');  

var viewEmployeeResourceSkillsByUserIdForManager = function (){

};

viewEmployeeResourceSkillsByUserIdForManager.viewEmployeeResourceSkillsByUserIdForManager = function(req, res) { 

try{

//mysql.query('Select r.* from resourceskills r, userpersondetails u , skillsmaster s where r.UserID = u.userID and r.SkillID = s.ID and r.IsDeleted = 0 and s.ID = ? and u.userID',[req.params.ID,req.params.userID], function(err, results) {
mysql.query('SELECT c.CategoryName,s.SkillName,r1.Rating,r1.ModifiedDate,r1.ModifiedBy FROM employeemaster r JOIN employeeskillmaster r1 JOIN categorymaster c JOIN skillmaster s ON r1.UserId = r.UserId AND r1.CategoryId = c.CategoryId AND r1.SkillId = s.SkillId AND r.UserId = ?',[req.params.UserId], function(err, results) {
if (err) throw err;

if (results.length === 0) {
logger.info({ success: false, message: 'Data not found for userID_' +req.params.UserId});
res.status(403).send({success: false, message: 'Data not found for userID_' +req.params.UserId});
console.log("Data not found for userID_ " +req.params.UserId);

} else {

var response = { checkresourceskills_ID : results[0].EmployeeSkillId };

console.log("Successfully Viewed users resourceskills for userID_" +req.params.UserId);
// logger.info(response);
logger.info({ success: false, message: 'Successfully Viewed users resourceskills for userID_' +req.params.UserId});
results[0].ModifiedDate=results[0].ModifiedDate.toISOString().slice(0, 19).replace(/T.*/, ' ');
res.send(results);
console.log(results);

}

});

} catch (err) {

console.error(err);

}

};

module.exports=viewEmployeeResourceSkillsByUserIdForManager;

