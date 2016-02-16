var app = angular.module('ionicApp', ['ionic','cars.app','ngRoute'])

app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate){
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})
