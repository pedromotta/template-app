(function() {
  'use strict';

  angular
    .module('templateApp')
    .config(config);

  function config($locationProvider) {
    $locationProvider.html5Mode(false);
  }

})();