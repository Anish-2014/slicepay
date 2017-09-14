
(function() {
    
    'use strict';

    angular.module('directives')
        .directive('modalDirective', modalDirective);

    modalDirective.$inject = [];
    function modalDirective() {
        return {
            restrict: 'E',
            scope: { 
                data: '=',
                submit: '=',
            },
            templateUrl: 'directives/modal/modal_directive.html',
            link: function(scope, element) {
                scope.$watch('data', function(arr) {
                    if(arr.length) {
                        scope.formObj = scope.data;
                        var element = angular.element('#myModal');
                        $(element).modal('show');
                        scope.data = [];
                    }
                }, true);
            }
        };
    }
})();