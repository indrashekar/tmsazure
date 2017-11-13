var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var addEmployeeResourceSkillsByManager = function (){
};

addEmployeeResourceSkillsByManager.addEmployeeResourceSkillsByManager = function(req, res) { 

console.log("Connected to Mysql");

if (!req.body.UserId){ 
logger.info({ success: false, message: 'UserId must not empty'});
return res.status(401).send({success: false, message: 'UserId required'});
console.log("UserId required");
}

if (!req.body.CategoryId){ 
logger.info({ success: false, message: 'CategoryId must not empty'});
return res.status(401).send({success: false, message: 'CategoryId required'});
console.log("CategoryId required");
}

if (!req.body.SkillId){ 
logger.info({ success: false, message: 'SkillId must not empty'});
return res.status(401).send({success: false, message: 'SkillId required'});
console.log("SkillId required");
}

if (!req.body.Rating){ 
logger.info({ success: false, message: 'Rating must not empty'});
return res.status(401).send({success: false, message: 'Rating required'});
console.log("Rating required");
}

var date;
date = new Date().toISOString().slice(0, 19).replace('T', ' ');

var UserId = req.body.UserId;
var CategoryId = req.body.CategoryId;
var SkillId = req.body.SkillId;

var addEmployeeSkills = {
UserId: req.body.UserId,
CategoryId: req.body.CategoryId,
SkillId: req.body.SkillId,
Rating : req.body.Rating,
IsDeleted : 0,
CreatedDate: date
};

mysql.query('SELECT * FROM employeeskillmaster WHERE UserId = ? AND CategoryId=? AND SkillId=?', [UserId,CategoryId,SkillId]
,function(err,rows){
if(err)
console.log(err);



if (!rows.length)
{

mysql.query('INSERT INTO employeeskillmaster SET ?', addEmployeeSkills,
function(err, result) {
if (err) throw err;

res.send("Successfully added user resourceskills "+JSON.stringify(result));
console.log(result);

logger.info({ success: true, message: 'Successfully added Employee Resource skill for UserID_ ' + req.body.UserId});


console.log("Employee Resource UserID_:- " + result.insertId);
});
}
else
{
res.send("already skill exists Please select different skill");
console.log("please select different skill");
logger.info({ success: false, message: 'skill already exists please select different skill' + req.body.UserId});
}
});
};

module.exports=addEmployeeResourceSkillsByManager;



