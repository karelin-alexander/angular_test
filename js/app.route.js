  angular.module('ionicApp').config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('main', {
        url: "/main",
        templateUrl: 'src/main.html'
      })
      .state('poisk', {
        url: "/poisk",
        templateUrl: 'src/poisk.html'
      })
      .state('login', {
        url: "/login",
        templateUrl: 'src/login.html'
      })
      .state('setting', {
        url: "/setting",
        templateUrl: 'src/setting.html'
      });

    $urlRouterProvider.otherwise('/main');
  });
