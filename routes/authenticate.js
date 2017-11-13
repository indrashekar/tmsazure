
var users = require('./users.json'); 
var express = require('express');
var app = express();
var logger = require('morgan');  
app.use(logger('dev')); 
var jwt = require('jsonwebtoken');  
app.set('superSecret', "success is inevitable");  
var router = express.Router();  

/*router.use(function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS, DELETE');
next();
}); */

/* router.post('/authenticate', function(req, res) { //this will issue token for valid users  
var username = req.body.user;  
var password = req.body.password;  
var isUserFound = false;  
var foundUser = {};  

for (var i = 0; i < users.length; i++) {  
if (users[i].user === req.body.user) {  
isUserFound = true;  
foundUser = users[i];  
}  
}  
if (isUserFound) {  
if (foundUser.password == req.body.password) {  
var token = jwt.sign(foundUser, app.get('superSecret'), {  
expiresIn : 60*24*24// expires in 24 hours  
});  
// console.log(token);  
res.status(200).send({  
success: true,  
message: 'Enjoy your token!',  
token: token  
});  
} else {  
res.status(403).send({  
success: false,  
message: 'Authentication failed. Wrong password.'  
});  
}  
res.send(foundUser);  
} else {  
res.status(403).send({  
success: false,  
message: 'Authentication failed.  ' + req.body.user +' not found.' 
});  
}  
});  


router.use(function(req, res, next) {  

// check header or url parameters or post parameters for token  
var token = req.body.token || req.query.token || req.headers['x-access-token'];  

// decode token  
if (token) {  
// verifies secret and checks exp  
jwt.verify(token, app.get('superSecret'), function(err, decoded) {  
if (err) {  
return res.status(403).send({  
success: false,  
message: 'Failed to authenticate token.'  
});  
} else {  
// if everything is good, save to request for use in other routes  
req.decoded = decoded;  
next();  
}  
});  
} else {  
// if there is no token  
// return an error  
return res.status(403).send({  
success: false,  
message: 'No token provided.'  
});  
}  
});

router.get('/users', function(req, res) {  
//console.log(User);  
return res.json({  
status: 'OK',  
msg: "you are authenticated and all set to consume our services."  
});  

});  */

var categorysets = require('./reportingManager/fetchcategorysets');
var fetchEmployeeResourceSkillDetailsSelf = require('./reportingManager/fetchEmployeeResourceSkillDetailsSelf');
var fetchEmployeeResourceSkillsforManager = require('./reportingManager/fetchEmployeeResourceSkillsforManager');
var updateEmployeeResourceSkills = require('./reportingManager/updateEmployeeResourceSkills');
var deleteEmployeeResourceSkillsByManager = require('./reportingManager/deleteEmployeeResourceSkillsByManager');
var addEmployeeResourceSkillsByManager = require('./reportingManager/addEmployeeResourceSkillsByManager');
var searchEmployeeResourceSkillsForManager = require('./reportingManager/searchEmployeeResourceSkillsForManager');
var viewEmployeeResourceSkillsByUserIdForManager = require('./reportingManager/viewEmployeeResourceSkillsByUserIdForManager');
var updateEmployeeResourceSkillsByManager = require('./reportingManager/updateEmployeeResourceSkillsByManager');

var addEmployeeDataByHR = require('./HR/addEmployeeDataByHR');
var updateEmployeeDataByHR = require('./HR/updateEmployeeDataByHR');
var fetchCurrentEmployeeDataByHR = require('./HR/fetchCurrentEmployeeDataByHR');
var fetchAllEmployeeDataByHR = require('./HR/fetchAllEmployeeDataByHR');
var addEmployeeResourceSkillsByHR = require('./HR/addEmployeeResourceSkillsByHR');
var deleteEmployeeResourceSkillsByHR = require('./HR/deleteEmployeeResourceSkillsByHR');
var updateEmployeeResourceSkillsByHR = require('./HR/updateEmployeeResourceSkillsByHR');
var searchEmployeeResourceSkillsForHR = require('./HR/searchEmployeeResourceSkillsForHR');
var searchEmployeeDataByEname = require('./HR/searchEmployeeDataByEname');
var fetchResourceSkillDetailsBasedOnUser = require('./HR/fetchResourceSkillDetailsBasedOnUser');
var skillmasterlist = require('./HR/skillmasterlist');
var fetchstatusmasterlistbyhr = require('./HR/fetchstatusmasterlist');

var viewSelfEmployeeResourceSkills = require('./Employee/viewSelfEmployeeResourceSkills');

var fetchCurrentEmployeeDataByRC = require('./resourceCoordinator/fetchCurrentEmployeeDataByRC');
var searchEmployeeResourceSkillsForRC = require('./resourceCoordinator/searchEmployeeResourceSkillsForRC');
var fetchEmployeeResourceByRC = require('./resourceCoordinator/fetchEmployeeResourceByRC');
var deleteEmployeeResourceSkillsByRC = require('./resourceCoordinator/deleteEmployeeResourceSkillsByRC');

var addskillcategoryforadmin = require('./admin/addskillcategoryforadmin');
var addsubskillcategoryforadmin = require('./admin/addsubskillcategoryforadmin');
var updatesubskillcategoryforadmin = require('./admin/updatesubskillcategoryforadmin');
var updateskillcategoryforadmin = require('./admin/updateskillcategoryforadmin');

var fetchcategorylist = require('./HR/fetchcategorylist');
var fetchskillslist = require('./HR/fetchskillslist');
var fetchtrackingskillsforhr = require('./HR/fetchtrackingskillsforhr');
var managerlistforhr = require('./HR/managerlistforhr');
var primaryskilllistforhr = require('./HR/primaryskilllistforhr');
var roleslistforhr = require('./HR/roleslistforhr');
var login = require('./HR/login');
var managerLogin = require('./reportingManager/managerLogin')
var branchlistforhr = require('./HR/branchlistforhr');
var fetchEmployeeMasterDetailsBasedOnEmpId = require('./HR/fetchEmployeeMasterDetailsBasedOnEmpId');
var deleteEmployeeMasterdetailByHR = require('./HR/deleteEmployeeMasterdetailByHR');
var fetchAllReportingHeads = require('./HR/fetchAllReportingHeads');

var addstatusmasterbyadmin = require('./admin/addstatusmasterbyadmin');
var upadatestatusmasterbyadmin = require('./admin/upadatestatusmasterbyadmin');
var addEmployeeStatusByManager = require('./reportingManager/addEmployeeStatusByManager');
var fetchEmployeeMasterDetailsBasedOnUsername = require('./HR/fetchEmployeeMasterDetailsBasedOnUsername');
var fetchEmployeeMasterdetailsByManager = require('./reportingManager/fetchEmployeeMasterdetailsByManager');
var fetchstatusmasterlist = require('./admin/fetchstatusmasterlist');
var fetchemployeedatabyadmin = require('./admin/fetchemployeedatabyadmin');
var fetchAllReportingHeadsupdate = require('./HR/fetchAllReportingHeadsupdate');

router.get('/fetchcategorysets', categorysets.findAllCategorySets, function(req, res, next){
next();
});

router.get('/fetchAllReportingHeadsupdate/id=:id', fetchAllReportingHeadsupdate.fetchAllReportingHeadsupdate, function(req, res, next){
next();
});

router.get('/fetchstatusmasterlist', fetchstatusmasterlist.fetchstatusmasterlist, function(req, res, next){
next();
});

router.get('/branchlistforhr', branchlistforhr.branchlistforhr, function(req, res, next){
next();
});

router.get('/fetchAllReportingHeads', fetchAllReportingHeads.fetchAllReportingHeads, function(req, res, next){
next();
});

router.get('/skillmasterlist', skillmasterlist.skillmasterlist, function(req, res, next){
next();
});

router.get('/fetchEmployeeMasterDetailsBasedOnUsername/Username=:Username', fetchEmployeeMasterDetailsBasedOnUsername.fetchEmployeeMasterDetailsBasedOnUsername, function(req, res, next){
next();
});

router.get('/fetchEmployeeMasterDetailsBasedOnEmpId/EmployeeId=:EmployeeId', fetchEmployeeMasterDetailsBasedOnEmpId.fetchEmployeeMasterDetailsBasedOnEmpId, function(req, res, next){
next();
});

router.get('/fetchEmployeeResourceSkillDetailsSelf/UserId=:UserId', fetchEmployeeResourceSkillDetailsSelf.fetchEmployeeResourceSkillDetailsSelf, function(req, res, next){
next();
});

router.get('/fetchEmployeeResourceSkillsforManager/managerEmpId=:managerEmpId', fetchEmployeeResourceSkillsforManager.fetchEmployeeResourceSkillsforManager, function(req, res, next){
next();
});

router.get('/fetchemployeedatabyadmin/managerEmpId=:managerEmpId', fetchemployeedatabyadmin.fetchemployeedatabyadmin, function(req, res, next){
next();
});



router.get('/fetchEmployeeMasterdetailsByManager/managerEmpId=:managerEmpId', fetchEmployeeMasterdetailsByManager.fetchEmployeeMasterdetailsByManager, function(req, res, next){
next();
});

router.put('/updateEmployeeResourceSkills', updateEmployeeResourceSkills.updateEmployeeResourceSkills, function(req, res, next){
next();
});

router.put('/deleteEmployeeResourceSkillsByManager', deleteEmployeeResourceSkillsByManager.deleteEmployeeResourceSkillsByManager, function(req, res, next){
next();
});

router.post('/addEmployeeResourceSkillsByManager', addEmployeeResourceSkillsByManager.addEmployeeResourceSkillsByManager, function(req, res, next){
next();
}); 

/*router.get('/searchEmployeeResourceSkillsForManager/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/AvailabilityStatus=:AvailabilityStatus/ReportingManager=:ReportingManager', searchEmployeeResourceSkillsForManager.searchEmployeeResourceSkillsForManager, function(req, res, next){
next();
}); */

router.get('/searchEmployeeResourceSkillsForManager/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/ReportingManager=:ReportingManager', searchEmployeeResourceSkillsForManager.searchEmployeeResourceSkillsForManager, function(req, res, next){
next();
});

router.get('/viewEmployeeResourceSkillsByUserIdForManager/UserId=:UserId', viewEmployeeResourceSkillsByUserIdForManager.viewEmployeeResourceSkillsByUserIdForManager, function(req, res, next){
next();
});

router.put('/updateEmployeeResourceSkillsByManager', updateEmployeeResourceSkillsByManager.updateEmployeeResourceSkillsByManager, function(req, res, next){
next();
});

router.post('/addEmployeeDataByHr', addEmployeeDataByHR.addEmployeeDataByHR, function(req, res, next){
next();
}); 

router.put('/updateEmployeeDataByHR', updateEmployeeDataByHR.updateEmployeeDataByHR, function(req, res, next){
next();
});

router.get('/fetchCurrentEmployeeDataByHR', fetchCurrentEmployeeDataByHR.fetchCurrentEmployeeDataByHR, function(req, res, next){
next();
});

router.get('/fetchAllEmployeeDataByHR', fetchAllEmployeeDataByHR.fetchAllEmployeeDataByHR, function(req, res, next){
next();
});

router.post('/addEmployeeResourceSkillsByHR', addEmployeeResourceSkillsByHR.addEmployeeResourceSkillsByHR, function(req, res, next){
next();
}); 

router.put('/deleteEmployeeResourceSkillsByHR', deleteEmployeeResourceSkillsByHR.deleteEmployeeResourceSkillsByHR, function(req, res, next){
next();
});

router.put('/deleteEmployeeMasterdetailByHR', deleteEmployeeMasterdetailByHR.deleteEmployeeMasterdetailByHR, function(req, res, next){
next();
});

router.put('/updateEmployeeResourceSkillsByHR', updateEmployeeResourceSkillsByHR.updateEmployeeResourceSkillsByHR, function(req, res, next){
next();
});

router.get('/searchEmployeeDataByEname/name=:name', searchEmployeeDataByEname.searchEmployeeDataByEname, function(req, res, next){
next();
});

/*router.get('/searchEmployeeResourceSkillsForHR/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/AvailabilityStatus=:AvailabilityStatus', searchEmployeeResourceSkillsForHR.searchEmployeeResourceSkillsForHR, function(req, res, next){
next();
}); */

router.get('/searchEmployeeResourceSkillsForHR/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating', searchEmployeeResourceSkillsForHR.searchEmployeeResourceSkillsForHR, function(req, res, next){
next();
});

router.get('/viewSelfEmployeeResourceSkills/UserId=:UserId', viewSelfEmployeeResourceSkills.viewSelfEmployeeResourceSkills, function(req, res, next){
next();
});

router.get('/fetchCurrentEmployeeDataByRC', fetchCurrentEmployeeDataByRC.fetchCurrentEmployeeDataByRC, function(req, res, next){
next();
});

router.get('/searchEmployeeResourceSkillsForRC/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating', searchEmployeeResourceSkillsForRC.searchEmployeeResourceSkillsForRC, function(req, res, next){
next();
});

router.get('/fetchResourceSkillDetailsBasedOnUser/UserId=:UserId', fetchResourceSkillDetailsBasedOnUser.fetchResourceSkillDetailsBasedOnUser, function(req, res, next){
next();
});

router.get('/fetchEmployeeResourceByRC/UserId=:UserId', fetchEmployeeResourceByRC.fetchEmployeeResourceByRC, function(req, res, next){
next();
});

/*router.put('/deleteEmployeeResourceSkillsByRC', deleteEmployeeResourceSkillsByRC.deleteEmployeeResourceSkillsByRC, function(req, res, next){
next();
});*/


router.post('/addskillcategoryforadmin', addskillcategoryforadmin.addskillcategoryforadmin, function(req, res, next){
next();
});

router.post('/addsubskillcategoryforadmin', addsubskillcategoryforadmin.addsubskillcategoryforadmin, function(req, res, next){
next();
});

router.put('/updatesubskillcategoryforadmin', updatesubskillcategoryforadmin.updatesubskillcategoryforadmin, function(req, res, next){
next();
});

router.put('/updateskillcategoryforadmin', updateskillcategoryforadmin.updateskillcategoryforadmin, function(req, res, next){
next();
});

router.get('/fetchcategorylist', fetchcategorylist.fetchcategorylist, function(req, res, next){
next();
});

router.get('/fetchskillslist/:id', fetchskillslist.fetchskillslist, function(req, res, next){
next();
});

router.get('/fetchtrackingskillsforhr', fetchtrackingskillsforhr.fetchtrackingskillsforhr, function(req, res, next){
next();
});

router.get('/managerlistforhr', managerlistforhr.findManagers, function(req, res, next){
next();
});

router.get('/primaryskilllistforhr', primaryskilllistforhr.primaryskilllistforhr, function(req, res, next){
next();
});

router.get('/roleslistforhr', roleslistforhr.findRoles, function(req, res, next){
next();
});

router.post('/login', login.decryptpasword, function(req, res, next){
next();
}); 

router.post('/addstatusmasterbyadmin', addstatusmasterbyadmin.addstatusmasterbyadmin, function(req, res, next){
next();
});
router.put('/upadatestatusmasterbyadmin', upadatestatusmasterbyadmin.upadatestatusmasterbyadmin, function(req, res, next){
next();
});

router.put('/addEmployeeStatusByManager', addEmployeeStatusByManager.addEmployeeStatusByManager, function(req, res, next){
next();
}); 

router.post('/managerLogin', managerLogin.managerLogin, function(req, res, next){
next();
});

router.get('/fetchstatusmasterlistbyhr', fetchstatusmasterlistbyhr.fetchstatusmasterlist, function(req, res, next){
    next();
    });


router.use(function(req, res, next) {  

console.log('Something is happening.');  
next();  
});  


module.exports = router;

