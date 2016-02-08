(function (){
    'use strict';
    var app = angular.module('carApp', []);
    app.controller('carCtrl', function($http, $scope){
        $http.get('api/car.json').success(function(data){
            $scope.carData = data;
        });
    });
})();