  angular.module('ionicApp').config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('main', {
        url: "/main",
        templateUrl: 'src/main.html'
      });

    $stateProvider.state('poisk', {
        url: "/poisk",
        templateUrl: 'src/search.html'
      });

    $stateProvider.state('login', {
        url: "/login",
        templateUrl: 'src/login.html'
      });

    $stateProvider.state('setting', {
        url: "/setting",
        templateUrl: 'src/setting.html'
      });

    $urlRouterProvider.otherwise('/main');
  });
