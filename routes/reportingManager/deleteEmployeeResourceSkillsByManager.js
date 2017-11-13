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

});  */ 

var deleteEmployeeResourceSkillsByManager = function (){

};

deleteEmployeeResourceSkillsByManager.deleteEmployeeResourceSkillsByManager = function(req, res) { 

  var date;
  date = new Date().toISOString().slice(0, 19).replace('T', ' ');

  var EmployeeSkillId=req.body.EmployeeSkillId;

  if (!req.body.EmployeeSkillId){ 
       logger.info({ success: false, message: 'EmployeeSkillId must not empty'});
       return res.status(401).send({success: false, message: 'EmployeeSkillId required'});
       console.log("EmployeeSkillId required");
     }

     if (!req.body.UserId){ 
       logger.info({ success: false, message: 'UserId must not empty'});
       return res.status(401).send({success: false, message: 'UserId required'});
       console.log("UserId required");
     }

try{

  mysql.query('SELECT * FROM employeeskillmaster WHERE EmployeeSkillId = ?', [EmployeeSkillId]
    ,function(err,rows){
      if(err)
        return console.log(err);
if (!rows.length) {

 mysql.query("UPDATE `employeeskillmaster` SET `IsDeleted`=1,`ModifiedDate`=? where `EmployeeSkillId`=? and `UserId`=?", [date,req.body.EmployeeSkillId, req.body.UserId] , function(err,result) {

   if (err) throw err;
   console.log("Deleted Resource Skill for UserID_" +req.body.UserId);
    res.send("Deleted Resource Skills "+JSON.stringify(result));
    console.log(result);
    logger.info({ success: true, message: 'Successfully Deleted Resource Skill for UserID_' +req.body.UserId});

  });

 } else if(rows.length) {
  console.log("Already deleted EmployeeSkillId_  "  + req.body.EmployeeSkillId);
   logger.info({ success: false, message: 'Already deleted EmployeeSkillId_' + req.body.EmployeeSkillId});
   return res.send("EmployeeSkillId already deleted");
  
}
});

}catch (err) {
  // This will not catch the throw!
  console.error(err);

 }

};
 
module.exports=deleteEmployeeResourceSkillsByManager;


