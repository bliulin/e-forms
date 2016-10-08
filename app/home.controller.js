(function () {

    var app = angular.module("eformsApp");

    var HomeController = function ($scope, $location, formsService) {
        var vm = this;
        $scope.forms = [];
        
        $scope.gridOptions = {
            data: 'forms'
            , enableGridMenu: true
            , enableRowSelection: true
            , enableRowHeaderSelection: false
            , noUnselect: true
            , multiSelect: false
        };
        $scope.gridOptions.onRegisterApi = function (gridApi) {
            $scope.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                return $location.path('/form/' + row.entity.id);                
            });
        };

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