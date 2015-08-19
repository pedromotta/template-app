(function() {
  'use strict';

  angular
    .module('templateApp.controllers')
    .controller('IndexCtrl', IndexCtrl);

  function IndexCtrl($scope) {
    console.log('IndexCtrl', '$scope', !!$scope);
  }

})();