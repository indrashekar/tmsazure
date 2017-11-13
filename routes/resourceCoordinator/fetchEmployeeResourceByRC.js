var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var fetchEmployeeResourceByRC = function fetchEmployeeResourceByRC(){
};


fetchEmployeeResourceByRC.fetchEmployeeResourceByRC = function(req, res) { 
var UserId = req.params.UserId;
try{

mysql.query('SELECT DISTINCT categorymaster.CategoryName AS categoryName, skillmaster.SkillName AS skillName, employeeskillmaster.Rating AS rating, employeeskillmaster.ModifiedDate AS Modified_ON, employeeskillmaster.ModifiedBy AS ModifiedBy FROM employeeskillmaster JOIN categorymaster JOIN skillmaster ON employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeeskillmaster.IsDeleted= 0 and employeeskillmaster.UserId = ' + mysql.escape(UserId),function(err, results) {
if (err) throw err;
if (results.length === 0) {
res.status(403).send({success: false, message: 'Data not found' + req.params.UserId});
logger.info({ success: false, message: 'Data not found for this UserId_ ' + req.params.UserId});
console.log("Data not found for this UserId_ " + req.params.UserId);

} else {

console.log("populate manager resource skills details");
res.send(results);
logger.info({ success: true, message: 'Successfully fetched Employee resource skills by Resource Co-ordinator based on UserId_  ' + req.params.UserId});
console.log(results);
}
});
} catch (err) {
console.error(err);
}
};

module.exports=fetchEmployeeResourceByRC;
