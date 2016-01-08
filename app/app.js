(function(){
var demoApp= angular.module('urDoc',['ngRoute']);

demoApp.config(function($routeProvider) {

    $routeProvider
        .when('/',{
        controller: 'search',
        templateUrl: '/app/views/search.html'
        })
        .when('/login',{
        controller: 'loginCtrl',
        templateUrl: '/app/views/login.html'
        })
        .when('/registration',{
        controller: 'data',
        templateUrl: '/app/views/registration.html'
        })
        
        .when('/about_us',{
        controller: '',
        templateUrl: '/app/views/about_us.html'
        })
    
        
        .when('/contact_us',{
        controller: '',
        templateUrl: '/app/views/contact_us.html'
        })
        
        .when('/register',{
        controller:'',
        templateUrl: '/app/views/register.php'
        
        })
    
        .when('/doctorpanel',{
        controller:'doctor',
        templateUrl: '/app/views/doctor_panel.html'
        
        })
        
        .when('/uploadImage',{
        controller:'AppController',
        templateUrl: '/app/views/profileImage.html'
        
        })
    
             .when('/updateAddress',{
        controller:'doctor',
        templateUrl: '/app/views/updateLoc.html'
        
        })
         .when('/content',{
        controller:'content',
        templateUrl: '/app/views/content.html'
        
        })
        
         .when('/doctorAdmin',{
        controller:'doctor',
        templateUrl: '/app/views/admin.html'
        
        })
    
        .when('/viewAppointment',{
        controller:'doctor',
        templateUrl: '/app/views/viewAppointment.html'
        
        })
    
        .otherwise( {redirectTo:'/'} );
    
    });

}());