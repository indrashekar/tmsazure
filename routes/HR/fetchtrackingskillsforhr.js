var mysql=require('./mysqlConnection'); 

var logger=require('./loggers');


/*var winston = require('winston');
var logger = new (winston.Logger)({
});
logger.add(winston.transports.File, {
  prettyPrint: true,
  level: 'info',
  silent: false,
  colorize: true,
  timestamp: function(){
            return new Date().toLocaleString();
          },
  filename: './tmplog.log',
  maxsize: 4000000,
  maxFiles: 10,
  json: true
});*/

var fetchtrackingskillsforhr = function (){
};

var date2 = new Date();


fetchtrackingskillsforhr.fetchtrackingskillsforhr = function(req, res) { 
try{

	console.log("fetchtracking skills");
	
	
	
	mysql.query('SELECT employeemaster.EmployeeId,employeemaster.FirstName,employeemaster.LastName ,employeemaster.email,employeemaster.ReportingManager AS Reporting_Head ,(SELECT CONCAT(employeemaster.FirstName,employeemaster.LastName) FROM employeemaster WHERE employeemaster.EmployeeId = Reporting_Head) AS  reportingmanager ,CASE WHEN  MAX(employeeskillmaster.ModifiedDate) >=MAX(employeeskillmaster.CreatedDate)  THEN MAX(employeeskillmaster.ModifiedDate) WHEN  MAX(employeeskillmaster.ModifiedDate) IS NULL OR MAX(employeeskillmaster.CreatedDate)>=MAX(employeeskillmaster.ModifiedDate) THEN MAX(employeeskillmaster.CreatedDate) END AS lastModified FROM employeeskillmaster,employeemaster WHERE employeemaster.UserID=employeeskillmaster.UserID GROUP BY employeeskillmaster.UserID',function(err, results) {
	
   if (err) throw err;
    if (results.length === 0) {
      res.status(403).send({success: false, message: 'Data not found'});
      logger.info({ success: false, message: 'Data not found'});
    } else {
			
		for(var i=0; i<results.length;i++)
		{
			console.log("results[i].lastModified"+results[i].lastModified);
			
			console.log("date 2"+date2);
			var date1 = results[i].lastModified;
			var date3 = new Date(date1);
			timeDiff = Math.abs(date2.getTime() - date3.getTime());
            diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
			results[i]["daysago"]=diffDays;
			results[i]["lastModifiedDate"]=date3.toISOString().slice(0, 19).replace(/T.*/, ' ');
	}
	
		res.send(results);
	//res.send("EmployeeId: "+ results[i].EmployeeId +" "+ "FirstName: "+ results[i].FirstName +" "+"LastName: "+results[i].LastName +" "+"email: "+ results[i].email +" "+ " ReportingManager: " + results[i].ReportingManager  +" " +"days ago: "+ diffDays);
		console.log(results);
		logger.info({ success: true, message: 'Successfully fetched tracking skills'});
		
	
	}}
   )
	}
	
catch (err) {
  console.error(err);
}

};

module.exports=fetchtrackingskillsforhr;

