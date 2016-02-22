  angular.module('ionicApp').config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('login', {
      url: "/login",
      templateUrl: 'templates/login.html'
    });

    $stateProvider.state('setting', {
      url: "/setting",
      templateUrl: 'templates/setting.html'
    });

    $stateProvider.state('main', {
      url: "/main",
      templateUrl: 'templates/main.html'
    });

    $stateProvider.state('buy', {
      url: "/buy",
      templateUrl: 'templates/buy.html'
    });

    $stateProvider.state('sale', {
      url: "/sale",
      templateUrl: 'templates/sale.html'
    });

    $stateProvider.state('search', {
      url: "/search",
      templateUrl: 'templates/search.html'
    });

    $urlRouterProvider.otherwise('/main');
  });
