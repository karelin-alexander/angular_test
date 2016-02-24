(function (angular) {
  'use strict';

  var app = angular.module('ionicApp', ['ionic', 'cars.app', 'ngRoute']);

  app.controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {
    $scope.ToggleLeft = function () {
      $ionicSideMenuDelegate.ToggleLeft();
    };

    $scope.toggleModel = {
      data_auto: true,
      save_pass: true,
      view_pass: false
    };

    $scope.clientSideList = [
      {text: "$ USD", value: "1"},
      {text: "€ EUR", value: "0.9"},
      {text: "P RUB", value: "76"},
      {text: "б.р BLR", value: "21644"}
    ];

    $scope.colorSideList = [
      {text: "Red", value: "assertive"},
      {text: "Blue", value: "positive"},
      {text: "Green", value: "balanced"},
      {text: "Dark", value: "dark"}
    ];

    $scope.data = {
      clientSide: '1'
    };

    $scope.color_data = {
      color: 'positive'
    };

  });
})(window.angular);
