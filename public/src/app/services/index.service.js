(function() {
	'use strict';

	// service
	angular
		.module('templateApp.services')
		.service('IndexSvc', IndexSvc)
		.factory('IndexFac', IndexFac);

	function IndexSvc($http) {
		this.logError = function(msg) {
			console.log('IndexSvc', '$http', !!$http);
		};
	}

	function IndexFac($http) {
		return {
			logError: function(msg) {
				console.log('IndexFac', '$http', !!$http);
			}
		};
	}

})();