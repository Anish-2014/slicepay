'use strict';

angular.module('myApp', [
  'ngRoute',
  'home',
  'directives',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

 // $routeProvider.otherwise({redirectTo: '/home'});
}]);
