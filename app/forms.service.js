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

        var getFormById = function(id)
        {
            var result = 
                    {
                        "Id": id,
                        "Name": "Formular 200",
                        "Template": [
                            {
                                "type": "text",
                                "required": true,
                                "label": "Nume",
                                "subtype": "text",
                                "placeholder": "Introduceti numele",
                                "className": "form-control",
                                "name": "text-1475955630440"
                            },
                            {
                                "type": "number",
                                "required": true,
                                "label": "Varsta",
                                "min": "7",
                                "max": "200",
                                "className": "form-control",
                                "name": "number-1475955675594"
                            },
                            {
                                "type": "select",
                                "label": "Cati copii aveti?",
                                "className": "form-control",
                                "name": "select-1475955733061",
                                "values": [
                                    {
                                        "label": "Nici unul",
                                        "value": "0",
                                        "selected": true
                                    },
                                    {
                                        "label": "1",
                                        "value": "1",
                                        "selected": false
                                    },
                                    {
                                        "label": "2",
                                        "value": "2",
                                        "selected": false
                                    },
                                    {
                                        "label": "Mai mult de 2",
                                        "value": "2+",
                                        "selected": false
                                    }
                                ]
                            }
                        ]                      
                    };
        
            var deferred = $q.defer();
            deferred.resolve(result);
            return deferred.promise;
        };

        var saveForm = function(formID, content) {
            //TODO: save form here.

            var deferred = $q.defer();
            deferred.resolve(true);
            return deferred.promise;
        };

        return {
            getForms: getForms,
            getFormById: getFormById,
            saveForm: saveForm
        };
    };

    var module = angular.module("eformsApp");
    module.factory("formsService", formsService);

}());