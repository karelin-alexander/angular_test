( function (){

    angular.module('base.app').config(function($routeProvider){

        $routeProvider.when('/home', {
            templateUrl: 'src/car.html',
            controller : 'carsCtrl'
        });

        $routeProvider.when('/buying', {
            templateUrl: 'src/buying.html',
            controller: 'buyingCtrl'
        });

        $routeProvider.otherwise({redirectTo : '/home'});
    });
})();