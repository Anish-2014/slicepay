(function() {
	'use strict';

	angular.module('home')
		.controller('homeController', homeController);

	homeController.$inject = ['$scope', 'homeService'];
  
	function homeController($scope, homeService) {
		var vm = this;
		vm.openQstnModal = openQstnModal;
		$scope.modalFormObj = [];
		$scope.submit = submit;

		/* ======================================== Var ==================================================== */
		
		/* ======================================== Services =============================================== */
		var svc = homeService;
		/* ======================================== Public Methods ========================================= */
		function openQstnModal () {
			svc.getModalFormObj().then(function(rs) {
				$scope.modalFormObj = rs.data;
			}, function(err) {
				console.log('Failed to get questions: ', err);
			});
		}
		
		function submit(formObj) {
			svc.submitFormObj(formObj).then(function(rs) {
				console.log(rs);
			}, function(err) {
				console.log('Failed to send answers: ', err);
			});
		}
	}
})();