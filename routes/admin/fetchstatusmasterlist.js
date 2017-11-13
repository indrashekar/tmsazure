var mysql=require('./mysqlConnection'); 

var logger=require('./loggers');

var fetchstatusmasterlist = function (){
};

fetchstatusmasterlist.fetchstatusmasterlist = function(req, res) { 
try{
mysql.query("select DISTINCT Id ,StatusName , Description from statusmaster where IsDeleted = 0 order by Id ASC", function(err, results) {

if (err) throw err;
if (results.length === 0) {
res.send("Data not found");
logger.info({ success: false, message: 'Data not found for statusmaster'});
} else {
console.log("statusmaster list");
res.send(results);
console.log(results);
logger.info({ success: true, message: 'Successfully fetched statusmaster for admin'});
}
});
} catch (err) {
console.error(err);
}
};

module.exports=fetchstatusmasterlist;
