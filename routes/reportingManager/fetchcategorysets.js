var mysql=require('./mysqlConnection'); 
/*var winston = require('winston');
var logger = new (winston.Logger)({
});
logger.add(winston.transports.File, {
  prettyPrint: true,
  level: 'info',
  silent: false,
  colorize: true,
  timestamp: () => {
                return new Date().toString()
            },
  filename: './tmplog.log',
  maxsize: 4000000,
  maxFiles: 10,
  json: true
}); */

var logger=require('./loggers');

var categorysets = function (){
};


categorysets.findAllCategorySets = function(req, res) { 
try{
 mysql.query("select DISTINCT CategoryName from categorymaster where IsDeleted = 0 order by CategoryName ASC", function(err, results) {

   if (err) throw err;
    if (results.length === 0) {
      res.status(403).send({success: false, message: 'Data not found'});
      logger.info({ success: false, message: 'Data not found for categorymaster'});
      console.log("Data not found for categorymaster");
    } else {
	console.log("category sets for resource skills");
	res.send(results);
	console.log(results);
	logger.info({ success: true, message: 'Successfully fetched category sets for resource skills'});
 }
 });
} catch (err) {
  console.error(err);
}
};

module.exports=categorysets;

