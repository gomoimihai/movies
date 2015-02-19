'use strict';

angular.module('mean.moviescode').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('moviescode example page', {
      url: '/moviescode/example',
      templateUrl: 'moviescode/views/index.html'
    });
  }
]);
