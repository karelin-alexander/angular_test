( function (){

    angular.module('ionicApp').config(function($routeProvider){

        $routeProvider.when('/obyavlenie', {
            templateUrl: 'src/car.html',
            controller : 'carsCtrl'
        });
        $routeProvider.otherwise({redirectTo : '/obyavlenie'});
    });
})();
