(function(){

var loginCtrl=function($scope,$http,Data){

    $scope.userLogin=function(){
             $http({
          method  : 'POST',
          url     : '/api/login_api.php',
          data    : {user_name:$scope.username,
                    pwd:$scope.pwd,
                    typeuser:$scope.typeUser
                    },//forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'}
         })  
      .success(function(data){
      
          if(!data.success){
          console.log(data.errors.exception);
             $scope.errorCon=data.errors.con;
              $scope.errorException=data.errors.exception;   
          }else{
          
                 $scope.message = data.message;
                var path = "#/doctorAdmin";
                Data.setName($scope.username);
                console.log(Data.getName());
                window.location.href = path
          }
      
      
      });
    
    
    };


    }

    loginCtrl.$inject=['$scope','$http','Data'];
    angular.module('urDoc').controller('loginCtrl',loginCtrl);



}())