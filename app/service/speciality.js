/*(function(){
//var app=angular.module('urDoc',[$http]);

var spec=function($http){

    var getSpeciality= function(){
    
        var sp=[];
        
        $http({
          method  : 'POST',
          url     : '/api/speciality.php',
          headers : {'Content-Type': 'application/x-www-form-urlencoded'}
         })
          .success(function(data) {
        
            sp=data;    
            
      
        });
    
        return sp;
    }


}
    
      spec.$inject=['$http'];
    angular.module('urDoc').factory('speciality',spec);

    
}());*/

angular.module('urDoc')
    .factory('speciality', ['$http', function($http) {

    var urlBase = '/api/speciality.php';
    var dataFactory = {};

    dataFactory.getSpeciality = function () {
        return $http.get(urlBase);
    };

    return dataFactory;
}]);