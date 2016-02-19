var app = angular.module('ionicApp', ['ionic','cars.app','ngRoute'])

app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate){
  $scope.ToggleLeft = function() {
    $ionicSideMenuDelegate.ToggleLeft();
  };

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.toggleModel = {
    data_auto : true,
    save_pass : false,
    view_pass : false
  };

  $scope.clientSideList = [
    { text: "$ USD", value: "usd" },
    { text: "€ EUR", value: "eur" },
    { text: "₽ RUB", value: "rub" },
    { text: "б.р BLR", value: "blr" }
  ];
  $scope.data = {
    clientSide: 'usd'
  };
});
