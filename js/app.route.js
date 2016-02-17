( function (){

    angular.module('ionicApp').config(function($routeProvider){

        $routeProvider.when('/poisk', {
            templateUrl: 'src/poisk.html',
            controller : 'carsCtrl'
        });
        $routeProvider.otherwise({redirectTo : '/poisk'});
    });
})();
