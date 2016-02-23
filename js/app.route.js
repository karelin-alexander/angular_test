  angular.module('ionicApp').config(function($stateProvider, $urlRouterProvider){

<<<<<<< HEAD
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
=======
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
>>>>>>> refs/remotes/origin/ionic_step2

    $urlRouterProvider.otherwise('/main');
  });
