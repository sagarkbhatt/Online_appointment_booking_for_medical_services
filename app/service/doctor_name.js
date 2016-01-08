(function(){

    var share=function(){
    
        var data={
        name:''
        };
        
        return {
            getName:function(){
                return data.name;
            },
            setName:function(Dname){
                data.name=Dname;
            
            }
        
        }
    
    };
    
    angular.module('urDoc').factory('Data',share);

}());