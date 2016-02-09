(function(){
    'use strict';
    angular.module('CarService', []).service('car', function($http){
        this.getData = function(){
            return $http.get('api/car.json').then(function(response){
                return response.data;
            });
        };
    });
})();