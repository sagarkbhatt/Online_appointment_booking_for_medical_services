(function(){

    var content=function($scope,Data,$http){
    
    $scope.data=Data.getName();
    
        $scope.bookNow=function(data){
        console.log(data);
        $scope.doctorName=data;
        };
    
        $scope.bookDoctor=function(data){
        
        $http({
          method  : 'POST',
          url     : '/api/bookAppointment.php',
          data    : {doctor_id:$scope.doctorName,
                    user_id:data.user_id,
                    date_t:data.date,
                    priority:data.priority,
                    },//forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'}
         })
        .success(function(data){
        
            if (data.success) {
           $scope.appointmentError="";
                $scope.appointmentMsg="";
                $scope.appointmentMsg=data.msg;
            $scope.reply='true';
            }
            else{
                
           $scope.appointmentError="";
                $scope.appointmentMsg="";
            
           $scope.appointmentError=data.errors.error;
            $scope.reply='true';
            }
        })
                
        
        
        };
        
        };
    
    
    content.$inject=['$scope','Data','$http'];
    
    angular.module('urDoc').controller('content',content);
    
    

}())