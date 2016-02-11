( function (){

    angular.module('base.app').config(function($routeProvider){

        $routeProvider.when('/home', {
            templateUrl: 'src/car.html',
            controller : 'carsCtrl'
        });
        $routeProvider.otherwise({redirectTo : '/home'});
    });
})();
