(function(){


var doctor=function($scope,speciality,Data,$http){
    
    
    
    getSpec();
    var user=Data.getName();
    $scope.user=user;
    
    function getSpec() {
        speciality.getSpeciality()
            .success(function (data) {
                $scope.speciality = data;
            })
            .error(function (error) {
                //$scope.status = 'Unable to load customer data: ' + error.message;
            });
    }
    
    //image upload code
    /*
    $scope.onFileSelect = function($files) {
    var file = $files[0];
    if (file.type.indexOf('image') == -1) {
         $scope.error = 'image extension not allowed, please choose a JPEG or PNG file.'            
    }
    if (file.size > 2097152){
         $scope.error ='File size cannot exceed 2 MB';
    }     
    $scope.upload = $upload.upload({
        url: '/api/upload.php',
        data: {fname: $scope.fname, name: $rootScope.user},
        file: file
      }).success(function(data, status, headers, config) {
        // file is uploaded successfully
        $scope.msg=data.msg;
        console.log(data);
      });
    }
    */
    
    
$scope.submitMe=function(){
    $http({
    method:'POST',
    url:'/api/updateDetail.php',
    data:{
        userName:user,
        speciality:$scope.spec,
        detail:$scope.txtDetail
        },
    headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(data){
    
        if(data.success){
        
            $scope.msg=data.msg;
        }
        
    })
    
    };
    
$scope.saveAddress=function(formData){


    $http({
        method:'POST',
    url:'/api/updateAddress.php',
    data:{userName:user,
         add:$scope.txtAdd,
        lat:$scope.txtLat,
        lon:$scope.txtLon
         },
     headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(data){
    
        if(data.success){
        
            $scope.addMsg=data.msg;
        }
        
    })



    };

    $scope.changePath=function(){
    
                var path = "#/updateAddress";
                window.location.href = path
    
    }


$scope.viewAppointment= function(){

    $http({
    
        method:'POST',
        url:'/api/viewAppointment.php',
        data:{userName:user
        },
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(data){
          //$scope.viewApp=true;
        console.log(data);
            $scope.viewApp=true;
            $scope.appointment=data;

    })

    };
    
$scope.updateAppointment= function(data,index){

    
    
    $http({
    
        method:'POST',
        url:'/api/updateAppointment.php',
        data:{
                id:index,
                userName:user,
              status:data.status,
              utime:data.udate
              
        },
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(data){
          //$scope.viewApp=true;
        if(data.success){
            $scope.updateError="";
            $scope.updateAppointment="";
            $scope.ureply=true;
            $scope.updateAppointment=data.msg;
        }else{
            $scope.updateError="";
            $scope.updateAppointment="";
            $scope.ureply=true;
            
            $scope.updateError=data.errors.error;
        }
    })

    };
    
    

};

     doctor.$inject=['$scope','speciality','Data','$http'];
    angular.module('urDoc').controller('doctor',doctor);



}());