var ApiUrlPrefix = "http://13.66.38.99/api/";

app.controller('homeCtrl', function ($rootScope, $scope, $http, $state, $stateParams,loginAuthentication, $interval, $window, $location, $timeout,$filter) {

$scope.userinfodata = loginAuthentication.getLoggedInUserInfo();
console.log($scope.userinfodata);
console.log($scope.userinfodata.EmployeeId);
console.log($scope.userinfodata.currentUser);
$scope.state = $state;
window.$scope = $scope;

// Fetch All Employee Data in the home with the HR login
function DataCall() {
$http.get(ApiUrlPrefix + "fetchAllEmployeeDataByHR").success(function (data) {
$scope.currentEmployeeList = data;

console.log(data);
});
}
DataCall();

// Fetch All Employee Data for Reporting Manager with manager login
function employeeManagerList() {

$http.get(ApiUrlPrefix + "fetchEmployeeMasterdetailsByManager/managerEmpId=" + $scope.userinfodata.EmployeeId).success(function (response) {
$scope.managerEmployeeList = response;

console.log(response);
});
}
employeeManagerList();

//Search for Employee Data 
function SearchCall() {
$http.get(ApiUrlPrefix + "fetchAllEmployeeDataByHR").success(function (data) {
$scope.people = data;
console.log(data);

});
}
SearchCall();

//Fetch all roles in the employee updation
$http.get(ApiUrlPrefix + "roleslistforhr").success(function (data) {
$scope.roles=data;
});

$scope.rolechanged = function () {
$http.get(ApiUrlPrefix + "roleslistforhr").success(function (data) {
angular.forEach(data, function (obj) {
if (obj.RoleID == $scope.RoleID) {
$scope.roleid = obj.RoleID;
}
});
});
if ($scope.RoleID == "null") {
$scope.roleid = null;
}
}

//Fetch all reporting heads in the employee updation
$http.get(ApiUrlPrefix + "fetchAllReportingHeads").success(function (data) {
$scope.managers=data;
$scope.managers = [
    {value: 'null', name: 'No Reporting'}
   
  ];
 
});

$scope.managerchanged = function () {
$http.get(ApiUrlPrefix + "fetchAllReportingHeads").success(function (data) {
angular.forEach(data, function (obj) {
if (obj.ReportingManager == $scope.ReportingManager) {
$scope.ReportingManager = obj.ReportingManager;
}
});
});
if ($scope.ReportingManager == "null") {
$scope.ReportingManager = "null";
}
} 

//Fetch employee status in the employee updation
$http.get(ApiUrlPrefix + "fetchstatusmasterlistbyhr").success(function (data) {
    $scope.statusmaster=data;
    });

$scope.statusmasterchanged = function () {
    $http.get(ApiUrlPrefix + "fetchstatusmasterlistbyhr").success(function (data) {
    angular.forEach(data, function (obj) {
    if (obj.Id == $scope.Id) {
    $scope.id = obj.Id;
    }
    });
    });
    if ($scope.Id == "null") {
    $scope.id = null;
    }
    }

//Fetch primary skills in the employee updation
$http.get(ApiUrlPrefix + "skillmasterlist").success(function (data) {
$scope.skillmasterlist=data;
});
$scope.rhChange=function(a){
	console.log(a);
}
$scope.psChange=function(b){
	console.log(b);
}
$scope.rChange=function(c){
	console.log(c);
}
$scope.aChange=function(d){
    console.log(d);
}
$scope.statusChange=function(e){
    console.log(e);
}

$scope.repChange=function(f){
    console.log(f);
}
$scope.skillmasterchanged = function () {
$http.get(ApiUrlPrefix + "skillmasterlist").success(function (data) {
angular.forEach(data, function (obj) {
if (obj.SkillId == $scope.SkillId) {
$scope.skillid = obj.SkillId;
}
});
});
if ($scope.SkillId == "null") {
$scope.skillid = null;
}
}

//Edit and Updated Employee Data
$scope.editEmployee = function (EmployeeId) {
$scope.AvailabilityStatuses = ['Yes','No'];
$scope.IsReportingHeads = [{name:"Yes",value:1},{name:"No",value:0}];
console.log(EmployeeId);


$http.get(ApiUrlPrefix + "fetchAllReportingHeadsupdate/id=" +EmployeeId).success(function (data) {
$scope.managers=data;
console.log("managerlist1"+$scope.managers);
});

$http.get(ApiUrlPrefix + "fetchEmployeeMasterDetailsBasedOnEmpId/EmployeeId=" + EmployeeId).success(function (response) {
$scope.employee = response[0];

 $scope.employee.DateOfBirth = new Date($scope.employee.DateOfBirth);
$scope.employee.DateOfJoining = new Date($scope.employee.DateOfJoining);

if($scope.employee.DateOfLeaving!=null){

$scope.employee.DateOfLeaving = new Date($scope.employee.DateOfLeaving);
}


console.log(response);
console.log($scope.employee.ReportingManager);

});


$scope.updateEmployee = function () {

     $scope.firstDate = $filter('date')($scope.employee.DateOfBirth, 'yyyy-MM-dd');
     $scope.secondDate = $filter('date')($scope.employee.DateOfJoining, 'yyyy-MM-dd');
     $scope.thirdDate = $filter('date')($scope.employee.DateOfLeaving, 'yyyy-MM-dd');

     console.log($scope.firstDate);
	 if($scope.employee.ContactNo.length<10){
        alert("Contact Number must be 10 digits");
    } else if($scope.employee.EmployeeId== null || $scope.employee.EmployeeId== undefined||$scope.employee.EmployeeId==""){
    	alert("Please enter Employee Id");
    } else if($scope.employee.Designation== null || $scope.employee.Designation== undefined||$scope.employee.Designation==""){
    	alert("Please enter Designation");
    } else if($scope.employee.RoleId== null || $scope.employee.RoleId== undefined||$scope.employee.RoleId==""){
    	alert("Please select Role");
    } else if($scope.employee.HighestQualification== null || $scope.employee.HighestQualification== undefined||$scope.employee.HighestQualification==""){
    	alert("Please enter Highest Qualification");
    } else if($scope.employee.ContactNo== null || $scope.employee.ContactNo== undefined||$scope.employee.ContactNo==""){
    	alert("Please enter Contact No.");   
    /*}else if($scope.employee.PriorExprience== null || $scope.employee.PriorExprience== undefined||$scope.employee.PriorExprience==""){
    	        alert("Please enter Prior Exprience");*/
   /* } else if(i== null || i== undefined||i==""){
    	alert("Please select Availability Status"); */
    } else if($scope.firstDate== null || $scope.firstDate== undefined||$scope.firstDate==""){
    	alert("Please enter Date of Birth");
    } else if($scope.secondDate== null || $scope.secondDate== undefined||$scope.secondDate==""){
    	alert("Please enter Date of Joining");
    } else if($scope.employee.PrimarySkill== null || $scope.employee.PrimarySkill== undefined|| $scope.employee.PrimarySkill==""){
    	alert("Please select Primary Skill");
    } else if($scope.employee.FirstName== null || $scope.employee.FirstName== undefined||$scope.employee.FirstName==""){
        alert("Please enter First Name");
   }
   else if($scope.employee.Password== null || $scope.employee.Password== undefined||$scope.employee.Password==""){
        alert("Please enter Password");
   }
    else {

var employee = {
"FirstName": $scope.employee.FirstName,
"EmployeeId": $scope.employee.EmployeeId,
"LastName" : $scope.employee.LastName,
"Designation":$scope.employee.Designation,
"HighestQualification":$scope.employee.HighestQualification,
"ContactNo":$scope.employee.ContactNo,
"PriorExprience":$scope.employee.PriorExprience,
//"AvailabilityStatus":i,
"DateOfBirth":$scope.firstDate,
"DateOfJoining":$scope.secondDate,
"DateOfLeaving":$scope.thirdDate,
//"ProfilePhoto":m,
"RoleId":$scope.employee.RoleId,
"PrimarySkill":$scope.employee.PrimarySkill,
"ReportingManager":$scope.employee.ReportingManager,
"integraExperience":$scope.employee.integraExperience,
"ModifiedBy":$scope.userinfodata.Username,
"Password":$scope.employee.Password,
"Availability":$scope.employee.Availability,
"IsReportingHead":$scope.employee.IsReportingHead
};



$http.put(ApiUrlPrefix + 'updateEmployeeDataByHR', employee).success(function (data) {
alert("Employee details updated successfully"); 
$("#editEmployee").modal("hide");
$http.get(ApiUrlPrefix + "fetchAllEmployeeDataByHR").success(function (data) {
$scope.currentEmployeeList = data;
});
}).error(function (data) {
$scope.error = "An error has occured while updating! " + data;                
});
}
}
}
$scope.editEmployeeStatus = function (EmployeeId) {
console.log(EmployeeId);
$scope.AvailabilityStatuses = ['Yes','No'];
$http.get(ApiUrlPrefix + "fetchEmployeeMasterDetailsBasedOnEmpId/EmployeeId=" + EmployeeId).success(function (response) {
$scope.employee = response[0];
console.log(response);
});


$scope.updateEmployeeStatus = function () {
var employee = {
"EmployeeId": $scope.employee.EmployeeId,
"Availability":$scope.employee.Availability 
};
console.log(employee)
$http.put(ApiUrlPrefix + 'addEmployeeStatusByManager', employee).success(function (data) {
alert("Employee details updated successfully");
$("#editEmployeeStatus").modal("hide");
$http.get(ApiUrlPrefix + "fetchEmployeeMasterdetailsByManager/managerEmpId=" + $scope.userinfodata.EmployeeId).success(function (data) {

$scope.managerEmployeeList = data;

//alert("Updated successfully!!"); 
});
}).error(function (data) {
$scope.error = "An error has occured while updating! " + data;                
});
}
} 

// Deleting Employee record based on Employee ID in the home 
$scope.deleteEmployeeProfile = function (EmployeeId) {
if (confirm("Are you sure you want to delete this employee record?")) {
var delEmployeeProfile = {
"EmployeeId": EmployeeId
};
$http.put(ApiUrlPrefix + 'deleteEmployeeMasterdetailByHR', delEmployeeProfile).success(function (data) {
alert("Successfully deleted employee details for Employee ID " +EmployeeId);

$http.get(ApiUrlPrefix + "fetchAllEmployeeDataByHR").success(function (data) {
$scope.currentEmployeeList = data;


});
}).error(function (data) {
$scope.error = "An error has occured while deleting! " + data;                
});
}  
}

$scope.Clear = function () {
$scope.FirstName = "";
$scope.LastName = "";
$scope.Designation = "";
$scope.roleid = "";
$scope.branchid = "";
$scope.PriorExprience = "";
$scope.email = "";
$scope.Password = "";
$scope.managerid = "";
$scope.HighestQualification = "";
$scope.ContactNo = "";
$scope.PrimarySkill = "";
$scope.Gender = "";
$scope.IsReportingHead = "";
//$scope.AvailabilityStatus = "";
$scope.firstDate = "";
$scope.secondDate = "";
$scope.ProfilePhoto = "";
$scope.AccessToResourceDatabase = "";
$scope.EmployeeId = "";
}


}); 