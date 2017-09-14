(function () {

    'use strict';

    angular.module('home')
        .service('homeService', homeService);

    homeService.$inject = ['$q', '$http'];

    function homeService($q, $http) {
        var service = this;
        service.getModalFormObj = getModalFormObj;
        service.submitFormObj = submitFormObj;
        service.modalFormObj = null;
        
        function getModalFormObj() {
            var deferred = $q.defer();
            $http.get('home/get_qstns_api.json')
                .then(function (rs) {
                    service.modalFormObj = rs.data;
                    deferred.resolve(rs.data);
                }, function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }

        function submitFormObj(answerObj) {
            var deferred = $q.defer();
            $http.post('send_answers_api', answerObj)
                .then(function (rs) {
                    deferred.resolve(rs.data);
                }, function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }
    }
})();