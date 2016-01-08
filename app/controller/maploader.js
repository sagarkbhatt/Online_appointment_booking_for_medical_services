(function(){

var location=function($scope) { 
    
    $scope.value = {name: 'surat'};
    
 };

    location.$inject= ['$scope'];
    angular.module('urDoc').controller('location',location);

}());