(function(){
    'use strict';
    angular.module('CarController', []).controller('carCtrl', function($scope,car){
        var promiseObj = car.getData();
        promiseObj.then(function(value){
            $scope.carData = value;
        });
    });
})();