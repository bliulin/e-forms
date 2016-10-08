(function () {

    var app = angular.module("eformsApp");

    var HomeController = function ($scope, $location, formsService) {
        var vm = this;
        $scope.forms = [];            

        var onGetFormsCompleted = function(data) {
            $scope.forms = data;
        };
        var onError = function (response) {
            $scope.error = "Could not fetch the data because: " + response.data.message;
        };

        formsService.getForms().then(onGetFormsCompleted, onError);
    };

    app.controller("HomeController", ["$scope", "$location", "formsService", HomeController]);

}());