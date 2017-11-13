var mysql=require('./mysqlConnection');

var logger=require('./loggers');

var addEmployeeResourceSkillsByHR = function (){
};

addEmployeeResourceSkillsByHR.addEmployeeResourceSkillsByHR = function(req, res) { 
var UserId = req.body.UserId;
var CategoryId = req.body.CategoryId;
var SkillId = req.body.SkillId;
console.log("Connected to Mysql");
var date;
date = new Date().toISOString().slice(0, 19).replace('T', ' ');

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

var addEmployeeSkills = {
UserId: req.body.UserId,
CategoryId: req.body.CategoryId,
SkillId: req.body.SkillId,
Rating : req.body.Rating,
IsDeleted : 0,
CreatedDate: date,
CreatedBy: req.body.CreatedBy
};
mysql.query('SELECT * FROM employeeskillmaster WHERE UserId = ? AND CategoryId=? AND SkillId=? AND `IsDeleted`=0', [UserId,CategoryId,SkillId]
,function(err,rows){
if(err)
console.log(err);



if (!rows.length)
{
mysql.query('INSERT INTO employeeskillmaster SET ?', addEmployeeSkills,
function(err, result) {
if (err) throw err;

res.send("Resource skills added successfully ");
console.log(result);

logger.info({ success: true, message: 'Successfully added Employee Resource skill for UserID_ ' + req.body.UserId});


console.log("Employee Resource UserID_:- " + result.insertId);
});
}
else
{
res.send("Selected Skill already exists for this Employee");
console.log("Please select different skill");
logger.info({ success: false, message: 'skill already exists please select different skill' + req.body.UserId});
}
});


};

module.exports=addEmployeeResourceSkillsByHR;



