var mysql=require('./mysqlConnection');

var logger=require('./loggers');



var primaryskilllistforhr = function primaryskilllistforhr(){
};
primaryskilllistforhr.primaryskilllistforhr = function(req, res) { 

try{
mysql.query("SELECT  DISTINCT SkillName from skillmaster WHERE IsDeleted='0' ORDER BY SkillName", function(err, results) {

if (err) throw err;
if (results.length === 0) {
// res.json({success: false, message: 'Data not found'});
res.status(403).send({ success: false, message: 'Data not found '});
logger.info({ success: false, message: 'no data'});
} else {
console.log("resource skill ratings");
res.send(results);
logger.info({ success: true, message: 'Successfully fetched primary skill list'});
console.log(results);
}
});
}
catch (err) {
console.error(err);
}

} 

module.exports=primaryskilllistforhr;
