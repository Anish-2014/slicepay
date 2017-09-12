(function() {
	console.log('0');
	'use strict';

	angular.module('home')
		.controller('homeController', homeController);

		homeController.$inject = [];
  
	function homeController() {
		
		/* ======================================== Var ==================================================== */
		
		/* ======================================== Services =============================================== */
		
		/* ======================================== Public Methods ========================================= */
		
		/* ======================================== Private Methods ======================================== */
		
	function init() {
		console.log('2');
	}

	init();
	}
})();