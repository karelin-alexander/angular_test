(function (angular) {
  'use strict';

  angular.module('ionicApp').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
      url: "/login",
      templateUrl: 'car/views/login.html'
    });

    $stateProvider.state('setting', {
      url: "/setting",
      templateUrl: 'car/views/setting.html'
    });

    $stateProvider.state('main', {
      url: "/main",
      templateUrl: 'car/views/main.html'
    });

    $stateProvider.state('buy', {
      url: "/buy",
      templateUrl: 'car/views/buy.html'
    });

    $stateProvider.state('sale', {
      url: "/sale",
      templateUrl: 'car/views/sale.html'
    });

    $stateProvider.state('search', {
      url: "/search",
      templateUrl: 'car/views/search.html'
    });

    $urlRouterProvider.otherwise('/main');
  });
})(window.angular);
