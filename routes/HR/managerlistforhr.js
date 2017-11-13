var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var managerlistforhr = function managerlistforhr(){
};

managerlistforhr.findManagers = function(req, res) { 

try{
mysql.query("SELECT ManagerId, managerName from manager WHERE IsDeleted='0' order by ManagerId ASC", function(err, results) {
if (err) throw err;
if (results.length === 0) {
// res.json({success: false, message: 'Data not found'});
res.status(403).send({ success: false, message: 'Data not found '});
logger.info({ success: false, message: 'no data'});
} else {
console.log("managers");
res.send(results);
logger.info({ success: true, message: 'Successfully fetched manager list'});
console.log(results);
//logger.info(results);
}
});
} catch (err) {
console.error(err);

};

}

module.exports=managerlistforhr;