(function (angular) {
  'use strict';

  angular.module('cars.app').service('Cars', function ($http) {
    this.getData = function () {
      return $http.get('api/car.json').then(function (response) {
        return response.data;
      });
    };
  });
})(window.angular);
