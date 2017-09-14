(function() {
	'use strict';

	angular.module('home', [])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'homeController',
		controllerAs: 'vm'
		})
		.otherwise({redirectTo: '/home'});
	}])
})();