(function () {

    var app = angular.module("eformsApp");

    var FormController = function ($scope, $location, formsService) {
        var vm = this;
        $scope.forms = {};
        
        alert('A');
    };

    app.controller("FormController", ["$scope", "$location", "formsService", FormController]);

}());