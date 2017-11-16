var ApiUrlPrefix = "http://172.16.1.129:3000/api/";
app.controller('ProfileCtrl', function ($rootScope, loginAuthentication, $scope, $http, $state, $stateParams, $interval, $window, $location, $timeout, $filter) {
    $scope.userinfodata = loginAuthentication.getLoggedInUserInfo();
    console.log($scope.userinfodata);
    $scope.state = $state;
    window.$scope = $scope;
    console.log($scope.userinfodata.EmployeeId);

    //Fetch Employee view self detail

    function DataCall(id) {
        $http.get(ApiUrlPrefix + "fetchEmployeeMasterDetailsBasedOnEmpId/EmployeeId=" + id).success(function (data) {
            $scope.currentEmployee = data[0];
            console.log(data);
        });
    }
    DataCall($scope.userinfodata.EmployeeId);

     //Fetch Employee view self resource skills detail
    function resourceSkills() {

        $http.get(ApiUrlPrefix + "fetchEmployeeResourceSkillDetailsSelf/UserId=" + $scope.userinfodata.EmployeeId).success(function (response) {
            $scope.currentEmployeeResource = response;
           

            console.log(response);
        });
      }
   resourceSkills();
});