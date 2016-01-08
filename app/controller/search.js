(function(){

 var search=function($scope,speciality,$http,Data){
     
    
    getSpec();

    function getSpec() {
        speciality.getSpeciality()
            .success(function (data) {
                $scope.speciality = data;
            })
            .error(function (error) {
                //$scope.status = 'Unable to load customer data: ' + error.message;
            });
    }
 
    $scope.searchDoctor=function(){
 
        $http({
            method:'POST',
            url:'/api/searchDoc.php',
            data:{
            spec:$scope.spec,
            rad:$scope.radius,
            lat:$scope.txtLat,
            lon:$scope.txtLon
            },
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    .success(function(data){
    
        //if(data.success){
        var path = "#/content";
        Data.setName(data);
        window.location.href = path; 
        $scope.data=data;
                            
       

            
        //}
        
    })
 
    }
 
 }
 
 search.$inject=['$scope','speciality','$http','Data'];

angular.module('urDoc').controller('search',search);

}());