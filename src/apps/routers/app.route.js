(function (angular) {
  'use strict';

  angular.module('ionicApp').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
      url: "/login",
      templateUrl: 'src/cars/views/login.html'
    });

    $stateProvider.state('setting', {
      url: "/setting",
      templateUrl: 'src/cars/views/setting.html'
    });

    $stateProvider.state('main', {
      url: "/main",
      templateUrl: 'src/cars/views/main.html'
    });

    $stateProvider.state('buy', {
      url: "/buy",
      templateUrl: 'src/cars/views/buy.html'
    });

    $stateProvider.state('sale', {
      url: "/sale",
      templateUrl: 'src/cars/views/sale.html'
    });

    $stateProvider.state('search', {
      url: "/search",
      templateUrl: 'src/cars/views/search.html'
    });

    $urlRouterProvider.otherwise('/main');
  });
})(window.angular);
