var app = angular.module('ionicApp', ['ionic','cars.app','ngRoute'])

app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate){
  $scope.ToggleLeft = function() {
    $ionicSideMenuDelegate.ToggleLeft();
  };

  $scope.toggleModel = {
    data_auto : true,
    save_pass : true,
    view_pass : false
  };

  $scope.clientSideList = [
    { text: "$ USD", value: "1" },
    { text: "€ EUR", value: "24012" },
    { text: "P RUB", value: "283" },
    { text: "б.р BLR", value: "21644" }
  ];

  $scope.data = {
    clientSide: '1'
  };

});
