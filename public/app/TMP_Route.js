/* IMSSPL's EMS App Routing and config Starts Here */
var app = angular.module("ITMS", ['ui.router', 'ngSanitize', 'ngIdle']);
app.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    /*Partial  pages*/
    var partials = {
        header: {
            templateUrl: 'public/app/partials/TMP_Header.html'
            , controller: ''
        }
        , footer: {
            templateUrl: 'public/app/partials/TMP_footer.html'
            , controller: ''
        }
        , sidebar: {
            templateUrl: 'public/app/partials/TMP_LeftSideBar.html'
            , controller: 'SidebarController'
        }
    , };
    /*EMS States are Defined Here*/
    $stateProvider.state('index', {
        url: "/Login"
        , title: "Login"
        , views: {
            "viewlogin": {
                templateUrl: "public/app/LoginPage/Tmp_Login.html"
                , controller: "LoginController"
            }
        , }
    , }) .state('home', {
        url: "/home"
        , title: "Home"   
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "public/app/HomePage/TMP_Home.html"
                , controller: "homeCtrl"
            }
        , }
    , }).state('newEmployee', {
        url: "/newEmployee"
        , title: "Employee"
       /* , resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "public/app/EmployeeRegistration/TMP_EmpRegistration.html"
                , controller: "addemployeeCtrl"
            }
        , }
    , }).state('feedback', {
        url: "/feedback"
        , title: "Feedback"
        /*, resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "public/app/Feedback/TMP_feedback.html"
                , controller: ""
            }
        , }
    , }).state('resourceskills', {
        url: "/resourceskills"
        , title: "ResourceSkills"
        /*, resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "public/app/ResourceSkills/TMP_ResourceSkills.html"
                , controller: "SkillsController"
            }
        , }
    , }).state('statusmaster', {
        url: "/statusmaster"
        , title: "Statusmaster"
        /*, resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "public/app/StatusMaster/statusmaster.html"
                , controller: "StatusMasterCtrl"
            }
        , }
    , }).state('skillmaster', {
        url: "/skillmaster"
        , title: "SkillMaster"
        /*, resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "public/app/SkillMaster/TMP_Skillmaster.html"
                , controller: "SkillMasterCtrl"
            }
        , }
    , }).state('trackingSkills', {
        url: "/trackingSkills"
        , title: "TrackingSkills"
        /*, resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "public/app/TrackingSkills/TMP_TrackingSkills.html"
                , controller: "TrackController"
            }
        , }
    , }).state('profile', {
        url: "/profile"
        , title: "User Profile"
        /*, resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "public/app/profile/TMP_profile.html"
                , controller: "ProfileCtrl"
            }
        , }
    , });
    // For any unmatched url, redirect to /page1     //
   $urlRouterProvider.otherwise("/Login");
});
/* EMS App Idle Timeout Logic` */
app.run(['Idle', '$location', '$window', function (Idle, $location, $window) {
    Idle.watch();
}]);