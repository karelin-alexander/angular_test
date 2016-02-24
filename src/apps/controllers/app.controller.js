(function (angular) {
  'use strict';

  angular.module('ionicApp').controller('displayElemCtrl', function ($scope, TagMenu) {
    $scope.tagsHeader = TagMenu.getTags();
  });
})(window.angular);
