
(function(){
    
    
            

    var data=function($scope,$http){
//create a blank object to handle form data.
      
        $scope.user = {};
      // calling our submit function.
        $scope.submitForm = function() {
                // Posting data to php file
        $http({
          method  : 'POST',
          url     : '/api/register_api.php',
          data    : {user_name:$scope.user_name,
                    name:$scope.name,
                    ph:$scope.ph,
                    email:$scope.email,
                    pwd:$scope.pwd,
                    typeuser:$scope.typeUser
                    },//forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'}
         })
          .success(function(data) {
            if (!data.success) {
              // Showing errors.
              $scope.errorName = data.errors.name;
              $scope.errorUserName = data.errors.username;
              $scope.errorEmail = data.errors.email;
            
                $scope.errorPh=data.errors.ph;
                $scope.errorPwd=data.errors.pwd;
                
             $scope.errorType=data.errors.type;
              $scope.errorCon=data.errors.con;
              $scope.errorException=data.errors.exception;   
                
             $scope.message="";
            } else {
               
              $scope.message = data.message;
           //   $scope.session=data.session;
             //  var path = "#/login";
            //window.location.href = path
            }
          });
            
        };
       
    }
    data.$inject=['$scope','$http'];
    angular.module('urDoc').controller('data',data);

}());