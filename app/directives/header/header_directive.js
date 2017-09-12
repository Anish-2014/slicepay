
(function() {
    
    'use strict';

    angular.module('directives')
        .directive('headerDirective', headerDirective);

    headerDirective.$inject = [];
    function headerDirective() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'directives/header/header_directive.html',
            link: function(scope) {

                /* ======================================== Var ==================================================== */
                /* ======================================== Services =============================================== */
             
                /* ======================================== Public Methods ========================================= */
                
                /* ======================================== Private Methods ======================================== */
              
                function init() {
                    
                }
                init();
            }
        };
    }
})();