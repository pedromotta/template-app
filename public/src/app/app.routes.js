(function() {
  'use strict';

  angular
    .module('templateApp')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'IndexCtrl'
      });
  }

})();