var loginApp = angular.module('blogUserApp',[]);

loginApp.controller('adminLoginCtrl', function($scope, $http){
    $scope.data = {};
    
    $scope.submit = function(){
        
         var data = {"username": $scope.username,"password" : $scope.password}
         $http.post("/admin_login", data).success(function(data, status) {
            if(data.a_id != ""){
                window.location.href='admin/logged_user/';
            }
         })
        
    }
});
