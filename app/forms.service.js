(function () {
    var formsService = function ($http, $q) {        

        var getForms = function () {
            // return $http.get('http://localhost:63117/api/forms')
            //     .then(function (response) {
            //         return response;
            //     });
            var result = [
                    {
                        "Id": 1,
                        "Name": "Formular 200"                        
                    },
                    {
                        "Id": 2,
                        "Name": "Formular 392B"
                    }];
        
        var deferred = $q.defer();
        deferred.resolve(result);
        return deferred.promise;
        };

        return {
            getForms: getForms
        };
    };

    var module = angular.module("eformsApp");
    module.factory("formsService", formsService);

}());