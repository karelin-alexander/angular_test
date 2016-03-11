(function (angular) {
  'use strict';

  angular.module('cars.app').service('Cars', function ($http) {
    this.getData = function () {
      return $http.get('http://localhost:3000/carData').then(function (response) {
        return response.data;
      });
    };
  });
})(window.angular);
