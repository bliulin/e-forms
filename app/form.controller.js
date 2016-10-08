(function () {

    var app = angular.module("eformsApp");

    var FormController = function ($scope, $location, $routeParams, formsService) {
        var vm = this;
        $scope.form = {};

        var onGetFormsCompleted = function(data) {
            $scope.form = data;
            $scope.form.Template = JSON.stringify(data.Template);
        };
        var onError = function (response) {
            $scope.error = "Could not fetch the data because: " + response.data.message;
        };

        formsService.getFormById($routeParams.id).then(onGetFormsCompleted, onError);
    };

    app.controller("FormController", ["$scope", "$location", "$routeParams", "formsService", FormController]);

}());