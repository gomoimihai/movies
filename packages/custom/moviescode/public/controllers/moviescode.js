'use strict';

/* jshint -W098 */
angular.module('mean.moviescode').controller('MoviescodeController', ['$scope', 'Global', 'Moviescode',
  function($scope, Global, Moviescode) {
    $scope.global = Global;
    $scope.package = {
      name: 'moviescode'
    };
  }
]);
