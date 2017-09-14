
(function() {
    
    'use strict';

    angular.module('directives')
        .directive('footerDirective', footerDirective);

    footerDirective.$inject = [];
    function footerDirective() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'directives/footer/footer_directive.html',
            link: function(scope) {

            }
        };
    }
})();