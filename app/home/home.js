(function() {
	'use strict';

	angular.module('home', [])

	.config(['$routeProvider', function($routeProvider) {
		console.log('1');
		$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'homeController'
		})
		.otherwise({redirectTo: '/home'});
	}])
})();